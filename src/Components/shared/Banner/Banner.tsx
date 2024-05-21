
import React from 'react'
import styles from "./Banner.module.css";
import img from '../../../assets/cover.png'
import Image from 'next/image';
import Link from 'next/link';
const Banner = () => {
  return (




<div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full">
       <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Unleash the Future of Entertainment
              {/* <br className="hidden md:block" />
              jumps over{' '}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-deep-purple-accent-400">
                  a lazy dog
                </span>
              </span> */}
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Get ready to broad your horizon! Our upcoming e-commerce event is packed with exclusive deals,
             exciting product launches, and valuable insights you won't want to miss.
 
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  Start Date:12/5/24
                </h6>
                <p className="text-sm text-gray-900">
                  
                  Look!website.Find update everyday
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  End Date:15/5/24
                </h6>
                <p className="text-sm text-gray-900">
                  Add to cart.No matter how costly is!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            width={500}
            height={224}
            src="https://i.postimg.cc/fbNnrrw8/37243.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <Link href="#slide4" className="btn btn-circle">❮</Link> 
      <Link href="#slide2" className="btn btn-circle">❯</Link>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
     <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
        <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">Brand new</p>
            </div>
            <h2 className="font-sans text-3xl font-bold tracking-tight  text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
            Create with studio-quality sound.
              
              
            </h2>
            <p className="text-gray-700 text-base md:text-lg">Lose Yourself in Immersive Sound: Upgrade Your Audio Experience</p>
          </div>
          <div className="grid gap-5 row-gap-8 ">
            
            <div className="bg-white shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0  bg-[linear-gradient(200deg,#FFD668,#4D1D1D)] rounded-r">
                <h6 className="mb-2 font-semibold leading-5 block">
                <p className='text-red-500 inline-block font-bold text-4xl'>15%</p>
                </h6>
                <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-slate-400 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
             Discount all Headphone
            </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            width={500}
            height={224}
            src="https://i.postimg.cc/J4f9s2BR/red-gold-headphones-digital-device.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
     <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
      <div className="pt-6 mb-6 lg:mb-0 lg:pt-6 lg:max-w-lg lg:pr-5">
        <div className="max-w-xl mb-6">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Discount
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Buy One, Get One FREE!
            {/* <br className="hidden md:block" />
            jumps over{' '}
            <span className="inline-block text-deep-purple-accent-400">
              a lazy dog
            </span> */}
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          Don't miss out on this incredible deal! For a limited time, when you buy one item, you'll get a second one of equal or lesser value for free. Hurry, this offer won't last long!
          </p>
        </div>
        <div className="flex items-center">
          <a
            href="/"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-red-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Shop Now
          </a>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
        <div>
          <Image
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            width={500}
            height={224}
            src="https://i.postimg.cc/K8LhQ2yK/young-confused-man-red-shirt-with-optical-glasses-holds-multicoloured-paper-bags-puts-hand-chin-isol.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
       <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl  font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Dive into Summer with a  Smartwatches{' '}
            
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Looking for a smartwatch that can keep up with your active lifestyle? Look no further than our selection of waterproof smartwatches! Perfect for swimming, running, or just enjoying a day at the beach, these watches will help you stay connected and on track all summer long.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 ">
           
            <div className="bg-[linear-gradient(152deg,#94A0B7,#DF8896)] shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                
                <p className="text-sm text-white">
                "Shop Waterproof Smartwatches Now!" or "Learn More About Waterproof Smartwatches."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
          
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            width={500}
          height={224}
            src="https://i.postimg.cc/0j6BQYk6/smartwatch-submerged.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
 

   
    
  )
}

export default Banner