import React from 'react'

export default function MovieDetail({ params }: { params: { id: string } }) {
  return (
    <div>MovieDetail of {params.id}</div>
  )
}
