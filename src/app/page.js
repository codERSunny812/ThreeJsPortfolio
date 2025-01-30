"use client"
import Image from "next/image";
import bg from "../../public/background/hogwarts.png";
import RenderModel from "@/components/RenderModel";
// import Harry from "@/components/models/Harry";
import Navigation from "@/components/navigation";

import dynamic from "next/dynamic";
const Wizard = dynamic(() => import("@/components/models/Harry"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-45"
      />
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>


      <div className="w-full h-screen z-10">
        <Navigation />
        <RenderModel>
           <Wizard/>
        </RenderModel>
      </div>
    </main>
  );
}
