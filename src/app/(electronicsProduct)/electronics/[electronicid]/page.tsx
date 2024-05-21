import ProductDetails from '@/Components/shared/Products/ProductDetails'
import { Electronics } from '@/types'
import React from 'react'

type Tpara={
  params:{
      electronicid:string
  }

}
export const generateStaticParams=async()=>{
  const res=await fetch('https://gadgetbackend.vercel.app/products/')
  const products=await res.json()
  

  return products.slice(0,3).map((product:Electronics)=>{
      electronicid:product._id
  })
}
const Productdetails = async({params}:Tpara) => {

  const res=await fetch(`https://gadgetbackend.vercel.app/products/${params.electronicid}`)
  const products=await res.json()


  return (
    <div>
        <ProductDetails products={products}></ProductDetails>
    </div>
  )
}

export default Productdetails