// import React from 'react'
import { debounce } from 'lodash'
import { useState } from 'react'

const dummyVideos=[
  {id:1,title:'React Concepts',thumbnail:'https://via.placeholder.com/300*180'},
  {id:2,title:'Node Concepts',thumbnail: 'https://via.placeholder.com/300x180'},
  {id:3,title:'Deep dive into Styling Frameworks',thumbnail: 'https://via.placeholder.com/300x180'}
];

export default function VideoList() {
  const [search,setSearch]=useState('');
  const[videos,setVideos]=useState(dummyVideos);

  const handleSearch=debounce((text)=>{
    setVideos(dummyVideos.filter((v)=>v.title.toLowerCase().includes(text.toLowerCase())));
  },300);

  return (
    <div className='mb=6'>
      <input className='p-2 border rounded w-full mb-4 focus:ring-2 focus:ring-blue-400' type="text" placeholder='Search Videos...'
      onChange={(e)=>{setSearch(e.target.value);
        handleSearch(e.target.value);
      }} value={search} />
      <ul className='grid md:grid-cols-2 gap-4'>
        {videos.map((video)=>(
          <li key={video.id} className='p-4 bg-white dark:bg-gray-800 rounded shadow hover:scale-105 transition transform'>
            <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
            <div className='p-4'>
            <h3 className='font-semibold mb-2'>{video.title}</h3>
            <div className='flex space-x-2'>
              <button className='bg-green-500 text-white px-3 py-1 rounded'>Like</button>
              <button className='bg-red-500 text-white px-3 py-1 rounded'>Dislike</button>
            </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
