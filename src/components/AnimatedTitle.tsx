"use client"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

interface Props {
  className?: string
  title: string
}

const AnimatedTitle = ({ title, className }: Props) => {
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top center",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      })

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      })
    }, titleRef)

    return () => ctx.revert() // Cleanup function to avoid memory leaks
  }, [])

  return (
    <div
      ref={titleRef}
      className={cn(
        "mt-5 text-center text-fs-25 uppercase leading-[0.8]",
        className
      )}
    >
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex justify-center items-center  flex-wrap max-w-full gap-2 px-20"
        >
          {line.split(" ").map((word, wordIndex) => (
            <span
              key={wordIndex}
              className="animated-word opacity-0 transform translate-y-10"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default AnimatedTitle
