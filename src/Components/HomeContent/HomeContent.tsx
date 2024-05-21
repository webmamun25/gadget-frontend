/* eslint-disable react/no-unescaped-entities */

import React from 'react'

import FlashSale from '@/app/flash-sale/page'
import Trending from '../shared/Products/Trending'

import TrendingCard from '../shared/Products/TrendingCard'
import FlashProduct from '../shared/Products/FlashProduct'
import { FlipWords } from '../ui/flip-words'
import Link from 'next/link'
import { Button } from '@nextui-org/react'
import { FaArrowRight } from 'react-icons/fa'
import { Electronics } from '@/types'
type Tpara={
  flashsale:Electronics[];
  trending:Electronics[];

}
const HomeContent = ({flashsale,trending}:Tpara) => {
    const words = ["Sony PlayStation 5", "Microsoft Surface", "Headphones", "Google Pixel 7"];
    const sale = flashsale.filter(prod => (prod.flashsale == true))
    const trend= trending.filter(product=> (product.ratings >=4.8))
    
    return (
    <div className='w-[90%] mx-auto'>
      
      <div className="text-2xl mx-auto  font-normal w-2/4 text-neutral-600 dark:text-neutral-400">
       
        <h1 className='text-4xl text-center my-5'>Grab the trending  at a flash sale price  <FlipWords className='text-[#111827] mx-auto' words={words} />  </h1> 
       
        <p className='text-center w-2/4 mx-auto'><i>only on  <span className='text-red-400'> Heldro</span> - but hurry, this offer won't last!</i></p>
        
   
    </div>
        
        <div className='grid grid-cols-2 mt-10 gap-4 my-5 relative'>
        <Button as={Link} href="/flash-sale" className="p-[7px] bg-[#111827] text-white absolute -top-12 right-0">
  

  See All  <FaArrowRight />
</Button>
          {sale.slice(0,4).map(flash=><FlashProduct key={flash._id} flashsale={flash}></FlashProduct>)}
        </div>
        <div className='grid grid-cols-3 gap-4 my-5 relative'>
          {trend.slice(0,6).map(ptrend=><TrendingCard key={ptrend._id} trending={ptrend}></TrendingCard>)}
          
          <Button as={Link} href="/trending" className="p-[7px] bg-[#111827] text-white absolute -bottom-12 right-0">
  

  See All Products <FaArrowRight />
</Button>
        </div>
        </div>
  )
}

export default HomeContent