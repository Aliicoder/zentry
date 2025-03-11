"use client"
import React, { useRef } from "react"
import AnimatedTitle from "../AnimatedTitle"
import gsap from "gsap"
import PrimaryButton from "../buttons/PrimaryButton"

const Story = () => {
  const imgRef = useRef<HTMLImageElement>(null)
  const handleMouseMove = (event: React.MouseEvent) => {
    if (imgRef.current) {
      const { clientY } = event
      const { top, height } = imgRef.current.getBoundingClientRect()
      const y = clientY - top
      const centerY = height / 2
      const rotateX = ((y - centerY) / centerY) * -10
      const rotateY = ((y + centerY) / centerY) * 10
      gsap.to(imgRef.current, {
        duration: 0.3,
        rotationX: rotateX,
        rotationY: rotateY,
        perspective: 300,
        ease: "power1.inOut",
      })
    }
  }
  const handleMouseLeave = () => {
    gsap.to(imgRef.current, {
      rotationX: 0,
      rotationY: 0,
      perspective: 300,
    })
  }

  return (
    <section id="story-section" className="py-40 bg-black text-blue-75 ">
      <div className=" gap-7 mx-auto  container flex flex-col items-center">
        <h1 className="mb-10 font-general uppercase  text-fs-20 mt-10 font-bold  ">
          The multiverse ip world
        </h1>
        <div className="relative flex flex-col  items-center ">
          <AnimatedTitle
            className="absolute-1 !text-fs-39 max-md:-translate-y-1/2 md:!text-fs-61 mix-blend-difference "
            title="The st<b>o</b>ry <br /> of a hidden real<b>m</b>"
          />

          <div
            ref={imgRef}
            className="flex w-9/12 justify-center"
            style={{
              clipPath: "polygon(4% 0, 83% 21%, 100% 73%, 0% 100%)",
            }}
          >
            <img
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              src="/img/entrance.webp"
              alt=""
            />
          </div>
          <div className=" mt-10 flex justify-end max-md:justify-start w-full max-md:w-9/12">
            <div className="flex flex-col items-center">
              <p className="pr-16 w-[350px] font-general text-fs-16">
                Where realms converge, lies Zentry and the boundless pillar.
                Discover its secrets and shape your fate amidst infinite
                opportunities.
              </p>
              <div className="flex  justify-start w-full">
                <PrimaryButton className="  font-general mt-9  text-fs-16 ring-0 bg-black border !border-white ">
                  Discover Prologue
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
