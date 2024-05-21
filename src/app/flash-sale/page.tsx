import Flashsale from '@/Components/shared/Products/Flashsale'
import React from 'react'

const FlashSale =async () => {
  const res = await fetch('https://gadgetbackend.vercel.app/products', {
    cache: 'no-store'
  })
  const flashSale = await res.json()
  return (
    <div>
        <Flashsale flashsale={flashSale}></Flashsale>
    </div>
  )
}

export default FlashSale