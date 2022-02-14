import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { HiPaperAirplane } from 'react-icons/hi';
import { message } from 'types/message';
import { RootState } from 'redux/reducer';
import { postMessage } from 'redux/actions/chatAction';
import { generateMessage } from 'utils/functions/generateMessage';
import { reduxUser, reduxPostMessage } from 'types/reduxTypes';
import { User } from 'types/user';
import './ChatInput.scss';

interface reduxProps {
  user: reduxUser;
  postMessage: reduxPostMessage;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

function ChatInput({ user, postMessage, message, setMessage }: reduxProps) {
  const areaRef = useRef<any>();

  useEffect(() => {
    if (areaRef && areaRef.current) {
      areaRef.current.style.height = '0px';
      const scrollHeight = areaRef.current.scrollHeight;
      areaRef.current.style.height = scrollHeight + 'px';
    }
  }, [message]);

  const validMessage = (send: message) => {
    if (message.trim().split('<br>').join('') !== '') {
      postMessage(send);
      setMessage('');
    }
  };

  const onSubmitHandler = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      validMessage(generateMessage(user as User, message));
    },
    [message, user]
  );

  const onKeyPressHandler = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        validMessage(generateMessage(user as User, message));
      }
    },
    [message, user]
  );

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(e.target.value);
    },
    [message]
  );

  return (
    <div className='input-container'>
      <form className='form' onSubmit={onSubmitHandler}>
        <textarea
          ref={areaRef}
          className='chat-input'
          onKeyPress={onKeyPressHandler}
          onChange={onChangeHandler}
          value={message}
          placeholder='write a message..'
          style={{ minHeight: '45px' }}
        ></textarea>
        <div className='btn-container'>
          <button className='send-btn' type='submit'>
            <HiPaperAirplane size={24} color='#fff' style={{ transform: 'rotate(90deg)' }} />
          </button>
        </div>
      </form>
      <div className='input-bottomtext-wrap'>
        <span>
          <strong>Return</strong>
          &nbsp;key to send
        </span>
        <span>
          <strong>Shift + Return</strong>
          &nbsp;key to add a new line
        </span>
      </div>
    </div>
  );
}

export default connect(
  (state: RootState) => ({
    user: state.userReducer.isLoggin,
  }),
  (dispatch: Dispatch) => ({
    postMessage: (message: message) => dispatch(postMessage(message)),
  })
)(ChatInput);
