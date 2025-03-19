"use client"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ReactNode, useRef, useState } from "react"

interface CardProps {
  className?: string
  title: ReactNode
  description: string
  videoUrl?: string
  tilted?: boolean
}
const TiltedCard = ({ className, title, description, videoUrl }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [transformStyle, setTransformStyle] = useState(``)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current && title) {
      const { width, height, left, top } =
        cardRef.current.getBoundingClientRect()
      const relativeX = (e.clientX - left) / width
      const relativeY = (e.clientY - top) / height
      const tiltX = (relativeY - 0.5) * -3
      const tiltY = (relativeX - 0.5) * 3
      const transform = ` perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1,1,1)`
      setTransformStyle(transform)
    }
  }
  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotationX: 0,
      rotationY: 0,
      perspective: 300,
    })
  }

  return (
    <div
      ref={cardRef}
      style={{ transform: transformStyle }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        className,
        `relative h-[450px] border rounded-lg overflow-hidden border-white/20 text-white transition-all
        pointer-events-none select-none`
      )}
    >
      <div className="absolute-1 size-full gap-5 p-5 flex flex-col">
        <h1 className="uppercase text-fs-49 font-zentry special-font">
          {title}
        </h1>
        <p className="text-balance max-md:text-fs-16 text-fs-20 font-general max-w-[350px] line-clamp-4">
          {description}
        </p>
      </div>
      <video
        ref={videoRef}
        className="size-full object-cover pointer-events-none select-none"
        src={videoUrl}
        playsInline
        autoPlay
        loop
        muted
      />
    </div>
  )
}
export default TiltedCard
