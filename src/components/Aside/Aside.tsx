import { useState } from 'react';
import { MdManageSearch } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import { HiFolder } from 'react-icons/hi';
import MessageContainer from 'components/MessageContainer/MessageContainer';
import ChatInput from 'components/ChatInput/ChatInput';
import MessageToolbar from 'components/MessageToolbar/MessageToolbar';
import {
  BsFillChatFill,
  BsCheckSquareFill,
  BsFillBagFill,
  BsFillPlusCircleFill,
  BsThreeDotsVertical,
} from 'react-icons/bs';
import './style.scss';

function Aside() {
  const [message, setMessage] = useState<string>('');

  return (
    <div className='aside-container'>
      <div className='aside-left'>
        <ul className='btn'>
          <li>
            <a href='#'>
              <BsFillChatFill size={15} color='#fff' />
            </a>
          </li>
          <li className='check'>
            <a href='#'>
              <BsCheckSquareFill size={15} color='#fff' />
            </a>
          </li>
        </ul>
        <span className='store'>
          <a href='#'>
            <BsFillBagFill color='#fff' />
          </a>
        </span>
      </div>
      <div className='aside-right'>
        <div className='browse'>
          <a href='#'>
            <MdManageSearch size={16} />
            Browse Channel
          </a>
        </div>
        <div className='menu'>
          <div className='starred title'>
            <p className='p-title'>Starred</p>
            <ul>
              <li>
                <FaStar size={8} color='#FFCB00' />
                <p>General</p>
              </li>
              <li>
                <FaStar size={8} color='#FFCB00' />
                <p>Release Updates</p>
              </li>
            </ul>
          </div>
          <div className='channel title'>
            <p className='p-title'>
              Channels{' '}
              <a href='#'>
                <BsFillPlusCircleFill color='#d8d8db' />
              </a>
            </p>
            <ul>
              <ul className='issue-container'>
                <span className='issue'>
                  <div className='issue-left'>
                    <a href='#'>
                      <HiFolder size={12} color='#3e80ff' />
                    </a>
                    <p className='p-title'>Recent issue</p>
                  </div>
                  <a href='#'>
                    <BsThreeDotsVertical color='#d8d8db' />
                  </a>
                </span>
                <li>Product Launch</li>
                <li>Enterprise Sales</li>
              </ul>
              <li>Website</li>
              <li>Product Management</li>
              <li>Design</li>
            </ul>
          </div>
          <div className='dm title'>
            <p className='p-title'>Direct Messages</p>
            <a href='#'>
              <BsFillPlusCircleFill color='#d8d8db' />
            </a>
          </div>
        </div>
      </div>
      <div className='chat-ui-container'>
        <div>
          <MessageToolbar />
        </div>
        <div className='content-wrapper'>
          <MessageContainer setMessage={setMessage} inputMessage={message} />
        </div>
        <ChatInput message={message} setMessage={setMessage} />
      </div>
    </div>
  );
}

export default Aside;
