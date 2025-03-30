"use client"
import PrimaryButton from "../buttons/PrimaryButton"
import { HiOutlinePlayCircle } from "react-icons/hi2"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div
        id="content-frame"
        className="relative-2 mt-28 mx-auto container flex"
      >
        <div className="p-10  flex flex-col">
          <h1
            className="text-fs-49 special-font uppercase font-zentry font-black right-5 text-blue-75
            max-md:text-fs-25"
          >
            redefi<b>n</b>
          </h1>
          <p
            className="text-fs-20 font-mono tracking-widest font-semibold text-blue-75
          max-md:text-fs-16 max-md:mt-2"
          >
            Enter the Metagame Layer <br /> Unleash the Play Economy
          </p>
          <PrimaryButton className="mt-8 text-fs-16 max-md:text-fs-10">
            <span className="mt-[1px]">Watch trailer </span>
            <HiOutlinePlayCircle className="text-fs-25 max-md:text-fs-13" />
          </PrimaryButton>
        </div>
      </div>

      <h1
        className="-absolute-1  text-fs-61 md:scale-150 origin-bottom-right  
        special-font uppercase font-zentry right-10 md:right-32 text-black bottom-5  "
      >
        G<b>a</b>ming
      </h1>
      <div id="video-frame" className="absolute-1 inset-0">
        <h1
          className="absolute-4  text-fs-61 md:scale-150 origin-bottom-right special-font 
        uppercase font-zentry right-10 md:right-32 text-blue-75 bottom-5  "
        >
          G<b>a</b>ming
        </h1>
        <video
          loop
          autoPlay
          playsInline
          muted
          src="/videos/hero-1.mp4"
          className="absolute-1  size-full object-cover object-center will-change-auto"
        />
      </div>
    </section>
  )
}

export default Hero
