import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { message } from 'types/message';
import { RootState } from 'redux/reducer';
import Message from './Message';
import './MessageContainer.scss';
interface reduxProps {
  chat: message[];

  setMessage: React.Dispatch<React.SetStateAction<string>>;
  inputMessage: string;
}

function MessageContainer({ chat, setMessage, inputMessage }: reduxProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }, [chat]);

  return (
    <>
      <div className='message-container'>
        {chat.map((message: message, idx) => {
          return (
            <Message
              key={idx}
              message={message}
              setMessage={setMessage}
              inputMessage={inputMessage}
            />
          );
        })}
        <div ref={scrollRef}></div>
      </div>
    </>
  );
}

export default connect((state: RootState) => ({
  chat: state.chatReducer,
}))(MessageContainer);
