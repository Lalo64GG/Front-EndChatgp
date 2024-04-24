import React from 'react'
import { TopBar } from '../Molecules/TopBar'
import {MessageInput} from '../Molecules/MessageInput'
import { useState } from 'react'

export const Home = () => {

    const [messages, setMessages] = useState('');

  return (
    <div className='h-screen flex flex-col'>
    <TopBar />

    {
      messages? (<ul className='text-white  overflow-auto px-4 w-full'>
      {messages.map((message, i) => (
        <li key={i} className={`my-2 p-2 table rounded-md ${message.from === 'Me' ? 'bg-sky-400' : ' bg-sky-800 ml-auto'}`}>
          <span className='text-xs text-black block'>{message.from}</span> 
          <span className='text-md'>{message.body}</span>
        </li>
      ))}
  </ul>) : (<h1 className='text-center font-bold text-black'>Envia un mensaje</h1>)
    }

    <div className='flex-grow' />
    <div>
      <MessageInput setMessages={setMessages}/>
    </div>
  </div>
  )
}
