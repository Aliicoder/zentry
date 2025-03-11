import { cn } from "@/lib/utils"
import React, { PropsWithChildren } from "react"
interface Props extends PropsWithChildren {
  className?: string
}
const PrimaryButton = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        `gap-3 flex items-center  bg-white w-fit rounded-3xl px-4 py-3 font-bold uppercase cursor-pointer`,
        `ring hover:ring-4 hover:scale-95 transition-all duration-200`,
        className
      )}
    >
      {children}
    </div>
  )
}

export default PrimaryButton
