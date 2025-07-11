// import React from 'react'

export default function ShimmerLoader() {
  return (
    <div className="animate-pulse space-y-4">
        <div className='h-6 bg-gray-300 rounded'></div>
                <div className='h-6 bg-gray-300 rounded w-5/6'></div>
                <div className='h-6 bg-gray-300 rounded w-4/6'></div>
                <div className='h-6 bg-gray-300 rounded w-5/6'></div>
                <div className='h-6 bg-gray-300 rounded w-3/6'></div>
    </div>
  )
}
