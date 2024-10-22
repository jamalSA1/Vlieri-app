import React from "react";
import banner1 from "@/assets/banner1.png";
import Image from "next/image";

export default function HeroSeaction() {
  return <div className="flex items-center justify-center mx-auto w-full lg:w-[1000px] ">
    <div className="w-full h-full">
    <Image src={banner1} alt="Banner" className="h-full"/>
    </div>
  </div>;
}
