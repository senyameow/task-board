import { Book } from "lucide-react";
import Font from 'next/font/local'

import { cn } from "@/lib/utils";
const headingFont = Font({
  src: '../../public/fonts/font.woff2'
})

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="flex flex-col gap-6 items-center">
        <div className="flex items-center gap-2 justify-between w-fit p-3 rounded-xl border shadow-sm text-purple-800 bg-purple-100">
          <Book className="w-6 h-6" />
          <span className={cn(`uppercase text-xl font-semibold`)}>Seemless task management experience</span>
        </div>
        <h1 className={cn(`text-4xl md:text-6xl text-center text-neutral-800`, headingFont.className)}><span className="bg-gradient-to-r from-rose-400 to-purple-600 bg-clip-text text-transparent  text-3xl md:text-7xl">Freello</span> helps businesses organize </h1>
        <div className=" bg-gradient-to-r text-3xl md:text-6xl from-purple-600 to-pink-600 p-2 px-4 rounded-xl text-white">
          work flow
        </div>
        <div className="flex items-center gap-1 text-neutral-400 mt-6 flex-col text-center text-2xl ">
          <p className={headingFont.className}>-- Envision Your ideal future --</p>
          <p className={headingFont.className}>-- Set clear goals --</p>
          <p className={headingFont.className}>-- Create a system of everyday actions --</p>
        </div>
      </div>
    </div>
  )
}
