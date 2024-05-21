"use client"
import Image from "next/image";

import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaCircleDollarToSlot } from "react-icons/fa6";
const AllCategories =() => {
  
      
         
    
    const [searchtext,setSearchtext]=useState('')
    const[SearchProduct,setSearchProduct]=useState('')

    const handleChange=(e)=>{
        const form=e.target
       
        e.preventDefault()
        const searchtext=(form.search.value)
        const Searchvalue= searchtext.charAt(0).toUpperCase()
        + searchtext.slice(1).toLowerCase()
        
     
        setSearchtext(Searchvalue)
        form.reset()
    }

    useEffect(()=>{
        fetch(`https://gadgetbackend.vercel.app/categories?brand=${searchtext}`)
        .then(res=>res.json())
        .then(data=>{
            
           
            setSearchProduct(data)
        }

        )
    },[searchtext])
   
  return (
    <div>
        
<form onSubmit={handleChange} className="max-w-md mx-auto">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" name='search' className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Sony,Samsung" required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#111827] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

{
    SearchProduct.length>0 && 
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="/" aria-label="Article">
            <Image
              src={SearchProduct[0]?.image}
              height={1000}
              width={1000}
              className="object-contain w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              {SearchProduct[0].brand}
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">{SearchProduct[0].title}</p>
            </a>
            <p className="mb-4 text-gray-700">
              {SearchProduct[0].description}
            </p>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                <FaCircleDollarToSlot />
                </div>
                <p className="font-semibold">{SearchProduct[0].price}</p>
              </a>
              
            </div>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="/" aria-label="Article">
            <Image
              src={SearchProduct[1].image}
              height={1000}
              width={1000}
              className="object-contain w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              {SearchProduct[1].brand}
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">{SearchProduct[1].title}</p>
            </a>
            <p className="mb-4 text-gray-700">
              {SearchProduct[1].description}
            </p>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                <FaCircleDollarToSlot />
                </div>
                <p className="font-semibold">{SearchProduct[1].price}</p>
              </a>
              
            </div>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="/" aria-label="Article">
            <Image
              src={SearchProduct[2].image}
              height={1000}
              width={1000}
              className="object-contain w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              {SearchProduct[1].brand}
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">{SearchProduct[2].title}</p>
            </a>
            <p className="mb-4 text-gray-700">
              {SearchProduct[2].description}
            </p>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                <FaCircleDollarToSlot />
                </div>
                <p className="font-semibold">{SearchProduct[2].price}</p>
              </a>
              
            </div>
          </div>
        </div>
      
       
      
      </div>
    </div>
}


  
 </div>
  )
}


export default AllCategories
