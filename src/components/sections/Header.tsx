"use client"
import React, { useEffect, useRef, useState } from "react"
import SecondaryButton from "../buttons/SecondaryButton"
const navLinks = ["Nexus", "Vault", "Prologue", "About", "Contact"]
import { cn } from "@/lib/utils"
import { IoVolumeMuteOutline } from "react-icons/io5"
import { useWindowScroll } from "react-use"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
function Header() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const { y: currentYScroll } = useWindowScroll()
  const [giveHeaderBg, setGiveHeaderBg] = useState(true)
  const [isShowHeader, setIsShowHeader] = useState(true)
  const [lastScrollPosition, setLastScrollPosition] = useState(0)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const handleAudioPlaying = () => {
    setIsAudioPlaying((prev) => {
      const newState = !prev
      if (newState == true) audioRef.current?.play()
      else audioRef.current?.pause()
      return newState
    })
  }
  useEffect(() => {
    if (currentYScroll == 0) {
      setIsShowHeader(true)
      setGiveHeaderBg(false)
    } else if (currentYScroll > lastScrollPosition) {
      setIsShowHeader(false)
      setGiveHeaderBg(true)
    } else if (currentYScroll < lastScrollPosition) {
      setIsShowHeader(true)
      setGiveHeaderBg(true)
    }
    setLastScrollPosition(currentYScroll)
  }, [currentYScroll, lastScrollPosition])
  useGSAP(() => {
    if (isShowHeader === false) {
      gsap.to("#header-frame", {
        y: "-100%",
      })
    } else {
      gsap.to("#header-frame", {
        y: " 0%",
      })
    }
  }, [isShowHeader])

  return (
    <section
      id="header-frame"
      className="fixed-5 p-2 pt-0 top-0 left-0 mim-h-16 w-full bg-transparent"
    >
      <div
        id="header-content"
        className={cn(
          giveHeaderBg && "bg-black  backdrop-blur ",
          "gap-5 p-6 mx-auto container flex justify-between  rounded-b-lg transition-all "
        )}
      >
        <div className="flex items-center">
          <div>
            <Image
              className="object-contain size-12 rounded-full"
              src="/img/logo.png"
              alt=""
            />
          </div>
          <SecondaryButton className="text-fs-16 text-blue-75 ">
            <span className=""> Zentry </span>
          </SecondaryButton>
        </div>
        <div className="gap-10 flex items-center">
          <div className="gap-5 hidden md:flex items-center  ">
            {navLinks.map((link, index) => {
              return (
                <a
                  key={index}
                  href=""
                  className="relative  ms-10 font-mono text-xs uppercase text-blue-50 after:absolute 
                after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0
                 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white cursor-pointer"
                >
                  {link}
                </a>
              )
            })}
          </div>
          <div
            onClick={handleAudioPlaying}
            className="gap-1  flex items-center justify-center  size-6 "
          >
            <audio
              ref={audioRef}
              loop
              className="hidden"
              src="/audio/loop.mp3"
            />
            {isAudioPlaying ? (
              <>
                {[1, 2, 3, 4].map((bar, index) => (
                  <div
                    key={bar}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    className={cn(
                      isAudioPlaying && "",
                      "active indicator-line"
                    )}
                  />
                ))}{" "}
              </>
            ) : (
              <IoVolumeMuteOutline className="text-white" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
