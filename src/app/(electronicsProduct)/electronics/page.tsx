import AllProducts from '@/Components/shared/Products/AllProducts'
import React from 'react'

const page = async() => {
  const res = await fetch('https://gadgetbackend.vercel.app/products', {
    cache: 'no-store'
  })
  const products = await res.json()
  return (
    <div>
        <AllProducts products={products}></AllProducts>
    </div>
  )
}

export default page