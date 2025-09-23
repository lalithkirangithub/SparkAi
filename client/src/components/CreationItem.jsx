import React, { useState } from 'react'
import Markdown from 'react-markdown'


const CreationItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer">
      {/* Header section (clickable) */}
      <div
        onClick={() => setExpanded(!expanded)}
        className="flex justify-between items-center"
      >
        <div>
          <h2 className="font-semibold">{item.prompt}</h2>
          <p className="text-gray-500">
            {item.type} - {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>
        <button className="bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] px-4 py-1 rounded-full">
          {item.type}
        </button>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div className="mt-3">
          {item.type === 'image' ? (
            <img
              src={item.content}
              alt="Generated"
              className="w-full max-w-md rounded-lg border"
            />
          ) : (
            <div className="h-full overflow-y-scroll text-sm text-slate-700 p-2 border rounded-lg">
              <div className='reset-tw'>
              <Markdown>{item.content}</Markdown>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CreationItem
