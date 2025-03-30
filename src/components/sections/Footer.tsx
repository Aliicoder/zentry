"use client"
import React from "react"
import { FaTwitter } from "react-icons/fa6"
import { PiTwitchLogoFill } from "react-icons/pi"
import { FaGithub } from "react-icons/fa"
import { FaDiscord } from "react-icons/fa"
const Footer = () => {
  return (
    <section className="bg-blue-500  border-t border-black">
      <div className=" gap-5 p-5 mx-auto container flex max-md:flex-col justify-between items-center">
        <h1>&copy; zentry 2024 All rights reserved</h1>
        <div className=" gap-5 flex ">
          <FaDiscord />
          <FaGithub />
          <PiTwitchLogoFill />
          <FaTwitter />
        </div>
        <h1 className="underline">Privacy polices</h1>
      </div>
    </section>
  )
}

export default Footer
