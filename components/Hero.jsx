import React from 'react';
import Image from "next/image";
import Navbar from './Navbar';

function Hero() {
    return (
        <div className="Hero relative">
            <div className="navigation">
                <Navbar />
            </div>
            <div className="h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[800px]">
                <Image 
                    src="https://i.ibb.co/3yPNbB6/airbnb-banner.webp"
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-[-4rem]"
                />
            </div>
        </div>
    )
}

export default Hero
