import React from "react"
import PrimaryButton from "../buttons/PrimaryButton"
import Image from "next/image"

const Contact = () => {
  return (
    <section className=" p-10 text-white">
      <div className="relative p-10 gap-5  mx-auto container flex flex-col items-center   bg-black ">
        <h1 className="max-md:mt-32 uppercase font-general text-fs-13">
          join zentry
        </h1>
        <h2 className="text-center text-fs-39 md:text-fs-61  font-black font-zentry special-font">
          let`s build the <br /> new era of <br /> gaming together
        </h2>
        <PrimaryButton className=" font-general mt-9  text-fs-16 ring-0 bg-black border !border-white ">
          Contact us
        </PrimaryButton>
        <div
          className="max-md:hidden size-60 lg:size-96  absolute-1 top-20 center left-[10%]"
          style={{
            clipPath: "polygon(25% 0%, 74% 0, 69% 64%, 34% 73%)",
          }}
        >
          <Image className="object-contain" src="/img/contact-1.webp" alt="" />
        </div>
        <div
          className="max-md:hidden size-60 lg:size-96 absolute-1 top-full center left-[15%]"
          style={{
            clipPath: "polygon(29% 15%, 85% 30%, 50% 100%, 10% 64%)",
          }}
        >
          <Image className="object-contain" src="/img/contact-2.webp" alt="" />
        </div>
        <div
          className="size-60 lg:size-96  absolute-1 max-md:top-0 top-1/2 center left-full max-md:left-1/2"
          style={{
            clipPath: "polygon(16% 0, 89% 15%, 75% 100%, 0 97%)",
          }}
        >
          <Image className="object-contain" src="/img/swordman.webp" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Contact
