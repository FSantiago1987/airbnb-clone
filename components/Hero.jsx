import React, {useState, useEffect} from 'react';
import Image from "next/image";
import Navbar from './Navbar';
import Header from './Header';

function Hero() {
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
        <div className="Hero relative">
            <div className="navigation">
                {!toggle && <Navbar className="transition duration-300 ease-out" />}
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
