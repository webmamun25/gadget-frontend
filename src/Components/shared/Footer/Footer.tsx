
import { Image } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    

<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
  
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Heldro</span>
            
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link href="/about" className="hover:underline me-4 md:me-6">About</Link>
                </li>
                <li>
                    <Link href="/electronics" className="hover:underline me-4 md:me-6">Products</Link>
                </li>
                <li>
                    <Link href="/flash-sale" className="hover:underline me-4 md:me-6">Flash Sale</Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Heldro. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer