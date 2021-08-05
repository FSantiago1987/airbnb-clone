import Head from "next/head";
import Banner from "../components/Banner";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import Live from "../components/Live";

export default function Home({ exploreData, liveData }) {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <Explore exploreData={exploreData} />
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
