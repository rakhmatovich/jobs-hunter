import React from 'react'

export default function Work({name}) {
  return (
    <div>
      <button className='bg-transparent border-black rounded p-[10px]'>{name}</button>
    </div>
  )
}
