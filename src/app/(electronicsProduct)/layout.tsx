
import Banner from '@/Components/shared/Banner/Banner';
import Footer from '@/Components/shared/Footer/Footer';
import Navbar from '@/Components/shared/Navbar/Navbar';
import React from 'react'

const Dashlayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
    
    {children}
        
       
        </div>
  )
}

export default Dashlayout