import HomeContent from "@/Components/HomeContent/HomeContent";
import Banner from "@/Components/shared/Banner/Banner";
import { Electronics } from "@/types";
import Image from "next/image";

const Home = async () => {
  const res = await fetch('https://gadgetbackend.vercel.app/products', {
    next: {
      revalidate: 30
    }
  })

  const flashsale = await res.json()
  const respond = await fetch('https://gadgetbackend.vercel.app/products', {
    next: {
      revalidate: 30
    }
  })
  const trending = await respond.json()



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner></Banner>
      <HomeContent flashsale={flashsale} trending={trending}></HomeContent>
    </main>
  );
}


export default Home
