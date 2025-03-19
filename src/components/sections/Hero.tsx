"use client"
import React, { useContext, useRef, useState } from "react"
import PrimaryButton from "../buttons/PrimaryButton"
import { HiOutlinePlayCircle } from "react-icons/hi2"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { AudioContext } from "@/context/AudioContext"
gsap.registerPlugin(ScrollTrigger)

const totalVideos = 3
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [hasClicked, setHasClicked] = useState(false)

  const { setIsAudioPlaying } = useContext(AudioContext)

  const nextVdRef = useRef<HTMLVideoElement>(null)
  const trailerRef = useRef<HTMLVideoElement>(null)

  const handleMiniVdClick = () => {
    setHasClicked(true)
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1)
  }
  const handlePlayTrailer = () => {
    if (trailerRef.current) {
      setIsAudioPlaying(false)
      trailerRef.current.classList.remove("hidden")
      trailerRef.current.play()
      trailerRef.current.requestFullscreen().catch((err) => {
        console.error("Fullscreen request failed", err)
      })
    }
  }

  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement && trailerRef.current) {
      trailerRef.current.pause()
      trailerRef.current.classList.add("hidden")
    }
  })
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
        gsap.from("#previewer", {
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
      },
    })
  })

  return (
    <section className="relative h-screen">
      <video
        className=" hidden z-40 fixed w-dvw h-dvh"
        ref={trailerRef}
        controls
        src={`/videos/trailer.mp4`}
      />
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
          <PrimaryButton
            onClick={handlePlayTrailer}
            className="mt-8 text-fs-16 max-md:text-fs-10"
          >
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
          src={getVdSrc(currentIndex)}
          loop
          autoPlay
          playsInline
          muted
          className="absolute-1  size-full object-cover object-center will-change-auto"
        />
        <video
          ref={nextVdRef}
          id="next-video"
          loop
          muted
          playsInline
          src={getVdSrc(currentIndex)}
          className="absolute-2 invisible top-1/2 left-1/2 center size-64 object-cover object-center 
          will-change-auto"
        />

        <div
          onClick={handleMiniVdClick}
          className=" absolute-3 center left-1/2 top-1/2 z-50 size-64 origin-center scale-50 opacity-0
            will-change-auto
            transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
        >
          <video
            src={getVdSrc((currentIndex % totalVideos) + 1)}
            loop
            muted
            playsInline
            id="previewer"
            className=" size-full object-cover origin-center"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
