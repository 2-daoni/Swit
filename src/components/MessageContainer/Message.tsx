import { useState } from 'react';
import { connect } from 'react-redux';
import { message } from 'types/message';
import { shortening } from 'utils/functions/shortening';
import { RootState } from 'redux/reducer';
import { reduxUser } from 'types/reduxTypes';
import './Message.scss';

interface reduxProps {
  message: message;
  user: reduxUser;
  deleteHandler: (message: message) => (e: React.MouseEvent<HTMLButtonElement>) => void;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  inputMessage: string;
}

function Message({ message, user, deleteHandler, setMessage, inputMessage }: reduxProps) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const content = message.content.split('\n');
  const isDeleteHandler = () => {
    setIsDelete(!isDelete);
  };
  const showFloatMenu = () => {
    setIsMouseOver(!isMouseOver);
  };

  const hideFloatMenu = () => {
    setIsMouseOver(false);
  };

  const replyHandler = () => {
    setMessage(`${message.userName}\n${content}\n(회신)\n${inputMessage}`);
  };

  return (
    <div className='Message-Wraper' onMouseEnter={showFloatMenu} onMouseLeave={hideFloatMenu}>
      <div className='chat-message-profile'>
        <img src={message.profileImage} alt='chat-profile-image' />
      </div>
      <div className='chat-message-content'>
        <div className='chat-message-header'>
          <span className='chat-message-header-name'>
            {message.userName} {user.userName === message.userName && <span>*</span>}
          </span>

          <span className='chat-message-header-sub'>{message.date}</span>
        </div>
        {content.map((line, idx) => {
          return <p key={idx}>{line || '\u00A0'}</p>;
        })}
      </div>
      <div>
        {isMouseOver && (
          <div className='chat-float-button'>
            {user.userName === message.userName && (
              <div>
                <button type='button' onClick={isDeleteHandler}>
                  삭제
                </button>
              </div>
            )}
            <div>
              <button type='button' onClick={replyHandler}>
                답장
              </button>
            </div>
          </div>
        )}
      </div>
      {isDelete && (
        <div className='modal-backdrop' onClick={isDeleteHandler}>
          <div className='modal-wrap' onClick={(e) => e.stopPropagation()}>
            <button onClick={isDeleteHandler} className='closeButton'>
              &times;
            </button>
            <div className='text-wrap'>
              <div>
                <p>"{shortening(message.content)}"</p> 메시지를 삭제하시겠습니까?
                <br />
              </div>
            </div>
            <div className='button-wrap'>
              <button onClick={deleteHandler(message)}>삭제하기</button>
              <button onClick={isDeleteHandler} className='nobutton'>
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default connect((state: RootState) => ({
  user: state.userReducer.isLoggin,
}))(Message);
