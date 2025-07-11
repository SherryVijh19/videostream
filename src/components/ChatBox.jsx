// import React from 'react'
import {useRef,useEffect,useState} from 'react'

const dummyMessages=['Hi there!','Great Video!','Keep it up!','Nice explanation!'];

export default function ChatBox() {
    const [messages,setMessages]=useState([]);
    const chatEndRef =useRef(null);

    useEffect(()=>{
        const interval=setInterval(()=>{
            setMessages((prev)=>[
                ...prev,
                `${new Date().toLocaleTimeString()}:${dummyMessages[Math.floor(Math.random()*dummyMessages.length)]}`
            ]);
        },2000);
        return ()=>clearInterval(interval);
    },[]);

    useEffect(()=>{
        if (chatEndRef.current) {
  chatEndRef.current.scrollTop = chatEndRef.current.scrollHeight;
}

        // chatEndRef.current?.scrollIntoView({behaviour:'smooth'});
    },[messages]);

  return (
    <div className='p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow h-96 overflow-y-auto'>
       <h2 className='text-xl font-semibold mb-2'>Live Chat</h2>
       <ul>
        {messages.map((msg,idx)=>(
            <li key={idx} className='p-1 border-b border-gray-300 dark:border-gray-600'>
                {msg}
            </li>
        ))}
        <div ref={chatEndRef} />
        </ul>      
    </div>
  )
}
