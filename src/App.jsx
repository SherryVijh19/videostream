import { useState,useEffect } from 'react'
import CommentsSection from './components/CommentsSection'
import ShimmerLoader from './components/ShimmerLoader'
import VideoList from './components/VideoList'
import ChatBox from './components/ChatBox'

function App() {
  const [loading,setLoading]=useState(true);
  const [darkMode,setDarkMode]=useState(false);

  useEffect(()=>{
    setTimeout(()=>setLoading(false),2000);
  },[]);

  return (
   <div className={darkMode?'dark bg-gray-900 text-white min-h-screen':'bg-gray-50 min-h-screen text-gray-900'}>
    <h1 className="text-4xl text-red-500 font-bold underline">Tailwind Works!</h1>
    <div className='p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-3xl font-bold mb-6 border-b pb-2 text-center'>Video Streaming</h1>
        <button onClick={()=>setDarkMode(!darkMode)} className='p-2 bg-blue-500 hover:bg-blue-600 text-white rounded shadow transition'>
          Toggle{darkMode?'Light':'Dark'} Mode
        </button>
      </div>

      {loading?(
        <ShimmerLoader />
      ):(
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='md:col-span-2'>
            <VideoList />
            <CommentsSection />
          </div>
          <ChatBox />
          </div>
      )}
    </div>
   </div>
  )
}

export default App
