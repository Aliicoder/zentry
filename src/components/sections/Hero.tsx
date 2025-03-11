"use client"
import React, { useContext, useEffect, useRef, useState } from "react"
import PrimaryButton from "../buttons/PrimaryButton"
import { HiOutlinePlayCircle } from "react-icons/hi2"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { PlayContext } from "@/context/playContext"
gsap.registerPlugin(ScrollTrigger)

const totalVideos = 4
const Hero = () => {
  const nextVdRef = useRef<HTMLVideoElement>(null)
  const mainVdRef = useRef<HTMLVideoElement>(null)
  const [currentIndex, setCurrentIndex] = useState(1)
  const [hasClicked, setHasClicked] = useState(false)
  const { hasStarted, startTrailer } = useContext(PlayContext)
  const handleMiniVdClick = () => {
    setHasClicked(true)
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1)
  }
  const handleStartClick = () => {
    startTrailer()
  }
  const getVdSrc = (index: number) => `/videos/hero-${index}.mp4`
  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" })
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            nextVdRef.current?.play()
          },
        })
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        })
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  )
  useGSAP(() => {
    const startClipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
    const endClipPath = "polygon(20% 10%, 80% 10%, 100% 90%, 5% 100%)"
    gsap.set("#video-frame", {
      clipPath: startClipPath,
    })

    gsap.to("#video-frame", {
      clipPath: endClipPath,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
    })
  })
  useEffect(() => {
    mainVdRef.current?.play()
  }, [])
  return (
    <section className="relative h-screen">
      <div
        id="content-frame"
        className="relative-2 mt-28 mx-auto container flex"
      >
        <div className="p-10  flex flex-col">
          <h1 className="text-fs-49 special-font uppercase font-zentry font-black right-5 text-blue-75">
            redefi<b>n</b>
          </h1>
          <p className="text-fs-20 font-mono tracking-widest font-semibold text-blue-75">
            Enter the Metagame Layer <br /> Unleash the Play Economy
          </p>
          <PrimaryButton
            onClick={handleStartClick}
            className="mt-8 S text-fs-16 "
          >
            <span className="mt-[1px]">Watch trailer </span>
            <HiOutlinePlayCircle className="text-fs-25" />
          </PrimaryButton>
        </div>
      </div>

      <h1
        className="-absolute-1  text-fs-61 md:scale-150 origin-bottom-right  
        special-font uppercase font-zentry font-black right-10 md:right-32 text-black bottom-5  "
      >
        G<b>a</b>ming
      </h1>
      <div id="video-frame" className="absolute-1 inset-0">
        <h1
          className="absolute-1  text-fs-61 md:scale-150 origin-bottom-right special-font 
        uppercase font-zentry font-black right-10 md:right-32 text-blue-75 bottom-5  "
        >
          G<b>a</b>ming
        </h1>

        <video
          ref={nextVdRef}
          src={getVdSrc(currentIndex)}
          loop
          muted
          id="next-video"
          className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
        />
        <video
          ref={mainVdRef}
          src={getVdSrc(currentIndex)}
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
        <div
          onClick={handleMiniVdClick}
          className="center absolute z-50 size-64 origin-center scale-50 opacity-0 
              transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
        >
          <video
            ref={nextVdRef}
            src={getVdSrc((currentIndex % totalVideos) + 1)}
            loop
            muted
            id="current-video"
            className="size-64 origin-center scale-150 object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
