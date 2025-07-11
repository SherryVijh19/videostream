// import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';

const comments=[
    {
        id:1,
        text:'Great Video!',
        replies:[
            {
                id:2,
                text:'Thanks!',
                replies:[
                    {
                        id:3,
                        text:'You are Welcome!',
                        replies:[]
                    },
                ]
            }
        ]
    },
]

function Comment({comment}){
    const[collapsed,setCollapsed]=useState(false);

    return(
        <div className='ml-4 mt-2 max-h-96 overflow-auto space-y-2'>
            <div className='flex items-center justify-between bg-white dark:bg-gray-800 p-2 rounded shadow'>
                <span>{comment.text}</span>
                {comment.replies.length > 0 && (
                    <button onClick={()=>setCollapsed(!collapsed)} className='text-sm text-blue-500 hover:underline'>
                        {collapsed?'Expand':'Collapse'}
                    </button>
                )}
            </div>
            {!collapsed && comment.replies.map((reply)=><Comment key={reply.id} comment={reply} />)}

        </div>
    )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    replies: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default function CommentsSection() {
  return (
    <div>
        <h2 className='text-xl font-semibold mb-2'>Comments</h2>
        {comments.map((c)=>(
            <Comment key={c.id} comment={c} />
        ))}
    </div>
  )
}
