import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";

function Banner() {
  return (
    <div className="relative h-[200px] sm:h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px] my-24">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        className="absolute top-[-4rem] rounded-xl"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Pefect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
