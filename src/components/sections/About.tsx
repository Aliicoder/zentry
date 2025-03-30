"use client"
import React from "react"
import AnimatedTitle from "../AnimatedTitle"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)
const About = () => {
  useGSAP(() => {
    const aboutImageAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-section",
        start: "top top",
        end: "bottom+=120% bottom",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    })
    aboutImageAnimation.to("#about-section", {
      height: 0,
    })
    aboutImageAnimation.to("#about-image", {
      translateY: "0%",
      ease: "power1.inOut",
    })
  })

  return (
    <section id="about-section">
      <div className="relative gap-5 pt-10  text-center flex flex-col items-center h-screen">
        <h1 className="uppercase  max-md:text-fs-31 text-fs-49 font-black font-zentry  ">
          welcome to zentry
        </h1>
        <AnimatedTitle
          className="!text-fs-39 md:!text-fs-61 !leading-[1] "
          title="disc<b>o</b>ver the world`s <br /> l<b>a</b>rgest shared adventures"
        />
        <div className="absolute-1 size-full">
          <div
            id="about-image"
            className="origin-bottom translate-y-full absolute-1  left-0  bottom-0  w-[100vw] h-[100vh]"
          >
            <img
              className="size-full object-cover"
              src="/img/about.webp"
              alt=""
            />
            <div
              className=" hidden  absolute-2 uppercase  max-md:text-fs-31 text-fs-49 font-black text-black font-zentry 
                center bottom-10 left-1/2"
            >
              <p className="bg-blend-exclusion">
                The Game of begins-your life, now an epic MMORPG
              </p>
              <p className="bg-blend-lighten">
                Zentry unites every player from countless games and platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
