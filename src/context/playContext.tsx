"use client"
import { createContext, useState } from "react"

interface PlayContextType {
  hasStarted: boolean
  startTrailer: () => void
}

export const PlayContext = createContext<PlayContextType>({
  hasStarted: false,
  startTrailer: () => {},
})

export const PlayProvider = ({ children }: { children: React.ReactNode }) => {
  const [hasStarted, setStartTrailer] = useState(false)

  const startTrailer = () => setStartTrailer(true)

  return (
    <PlayContext.Provider value={{ hasStarted, startTrailer }}>
      {children}
    </PlayContext.Provider>
  )
}
