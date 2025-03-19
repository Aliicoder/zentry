"use client"
import { createContext, Dispatch, SetStateAction, useState } from "react"

interface IAudioContext {
  isAudioPlaying: boolean
  setIsAudioPlaying: Dispatch<SetStateAction<boolean>>
}

export const AudioContext = createContext<IAudioContext>({
  isAudioPlaying: false,
  setIsAudioPlaying: () => {},
})

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  return (
    <AudioContext.Provider value={{ isAudioPlaying, setIsAudioPlaying }}>
      {children}
    </AudioContext.Provider>
  )
}
