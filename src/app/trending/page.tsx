import Trending from '@/Components/shared/Products/Trending'
import React from 'react'

const trending =async () => {
    const res = await fetch('https://gadgetbackend.vercel.app/products', {
        cache: 'no-store'
      })
      const trending = await res.json()
  return (
    <div>
        <Trending trending={trending} ></Trending>
    </div>
  )
}

export default trending