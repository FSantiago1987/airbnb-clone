import Head from "next/head";
import Banner from "../components/Banner";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LargeCard from "../components/LargeCard";
import Live from "../components/Live";
import React, {useState, useEffect} from 'react';

export default function Home({ exploreData, liveData }) {
  const [toggle, setToggle] = useState(false);
  const controlNavbar = () => {
    if(window.scrollY > 100){
      setToggle(true)
    } else {
      setToggle(false);
    }
  }

  useEffect(() =>{
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    }
  }, []);
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {toggle && <Header className="transition duration-300 ease-in-out" />}
      <Hero />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <Explore exploreData={exploreData} />
        <Banner />
        <Live liveData={liveData} />
        <LargeCard
          img="http://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  const exploreData = await fetch("http://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const liveData = await fetch("http://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      liveData,
    },
  };
}
