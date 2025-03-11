import { cn } from "@/lib/utils"
import React, { PropsWithChildren } from "react"
interface Props extends PropsWithChildren {
  className?: string
}
const SecondaryButton = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        `gap-3 flex items-center  w-fit rounded-3xl px-4 py-3 font-bold \ uppercase cursor-pointer border-l-0`,
        className
      )}
    >
      {children}
    </div>
  )
}

export default SecondaryButton
