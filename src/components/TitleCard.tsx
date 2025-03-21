import React from 'react'

interface TitleCardProps {
    text: string;
}
export default function TitleCard({text}: TitleCardProps) {
  return (
    <div className='text-xl font-medium'>
        <h2 className=''>{text}</h2>
    </div>
  )
}
