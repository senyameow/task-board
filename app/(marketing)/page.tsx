import { Book } from "lucide-react";
import Font from 'next/font/local'

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
const headingFont = Font({
  src: '../../public/fonts/font.woff2'
})

const textFont = Poppins({
  subsets: ['latin'],
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ]
})

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center relative">
      <div className="relative">
        <div aria-hidden='true' className="absolute border isolate inset-x-0 -top-[5rem] z-[10] w-80 opacity-70 h-36 transition blur-2xl ">
          <div style={{ clipPath: `polygon(24.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 15.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 70.2% 62.4%, 2.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 4.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)` }} className="relative opacity-50 w-[42rem] left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)] -translate-x-1/2 -rotate-[20deg] aspect-[1200/800] bg-gradient-to-tr from-[#9180Fc] to-[#FF9151]" />
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <div className="flex items-center gap-2 justify-between w-fit p-3 rounded-xl border shadow-sm text-purple-800 bg-purple-100">
          <Book className="w-6 h-6" />
          <span className={cn(`uppercase text-xl font-semibold`, textFont.className)}>Seemless task management experience</span>
        </div>
        <h1 className={cn(`text-4xl md:text-6xl text-center text-neutral-800`, headingFont.className)}><span className="bg-gradient-to-r from-rose-400 to-purple-600 bg-clip-text text-transparent  text-3xl md:text-7xl">Freello</span> helps businesses organize </h1>
        <div className={cn(` bg-gradient-to-r text-3xl md:text-6xl from-purple-600 to-pink-600 p-2 px-4 rounded-xl text-white`, textFont.className)}>
          work flow
        </div>
        <div className="flex items-center gap-1 text-neutral-400 mt-6 flex-col text-center text-2xl ">
          <p className={headingFont.className}>-- Envision Your ideal <span className="text-5xl text-rose-500 pl-3">future</span> --</p>
          <p className={headingFont.className}>-- Set clear <span className="text-5xl text-pink-500 pl-3">goals</span> --</p>
          <p className={headingFont.className}>-- Create a system of everyday <span className="text-5xl text-purple-500 pl-3">actions</span> --</p>

        </div>
      </div>

    </div>
  )
}
