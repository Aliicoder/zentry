"use client"
import { cn } from "@/lib/utils"
import React from "react"
import TiltedCard from "../TiltedCard"

const Features = () => {
  return (
    <section id="features-section" className="bg-black text-blue-75">
      <div className="mx-auto p-5 gap-5 container flex flex-col">
        <TiltedCard
          title={
            <>
              radia<b>n</b>t
            </>
          }
          description={` A cross-platform metagame app, turning your activities across Web2
          and Web3 games into a rewarding adventure.`}
          videoUrl="/videos/feature-1.mp4"
        />
        <div className="gap-5 grid grid-cols-2 ">
          <TiltedCard
            className="max-md:col-span-2 max-md:ml-20 md:row-span-2 md:!h-full"
            title={
              <>
                zig<b>m</b>a
              </>
            }
            description={` An anime and gaming-inspired NFT collection - the IP primed for expansion.`}
            videoUrl="/videos/feature-2.mp4"
          />
          <TiltedCard
            className="max-md:!h-[250px] max-md:mt-10"
            title={
              <>
                n<b>e</b>xus
              </>
            }
            description={` A gamified social hub, adding a new dimension of play to social interaction for Web3 communities.`}
            videoUrl="/videos/feature-3.mp4"
            tilted
          />
          <TiltedCard
            className="max-md:!h-[200px]"
            title={
              <>
                az<b>u</b>l
              </>
            }
            description={` A cross-world AI Agent - elevating your gameplay to be more fun and productive.`}
            videoUrl="/videos/feature-4.mp4"
          />
          <TiltedCard
            className="max-md:-mt-16 max-md:col-start-2 max-md:row-start-3 max-md:!h-[200px] "
            title={
              <>
                az<b>u</b>l
              </>
            }
            description={` A cross-world AI Agent - elevating your gameplay to be more fun and productive.`}
            videoUrl="/videos/feature-5.mp4"
          />
          <div
            className={cn(
              ` max-md:hidden max-md:col-span-2 max-md:mr-10 h-full p-5 flex md:justify-center items-center overflow-hidden  `
            )}
          >
            <h1 className=" uppercase max-md:text-fs-31 text-fs-49  font-zentry special-font">
              More is Coming
              <div>soon !</div>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
