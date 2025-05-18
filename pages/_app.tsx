import "@/styles/globals.css";
import { HeroHighlightDemo } from "@/components/HeroHighlightDemo";
import { GridSmallBackgroundDemo } from "@/components/GridSmallBackgroundDemo";
import CircularText from "@/components/ui/CircularText/CircularText";
import Image from "next/image";
export default function App() {
  return (
    <>
 
    <HeroHighlightDemo />
    <div className="relative mx-auto w-[320px] aspect-square">
      {/* Center Logo */}
      <div className="absolute inset-0 z-30 flex items-center justify-center">
        <Image
          src="/GithubSnv.svg"
          alt="Logo"
          width={60}
          height={60}
          className="w-16 h-16 mb-5"
        />
      </div>

      {/* Outer Circle */}
      <div className="absolute inset-0 flex items-center justify-space-between z-0">
        
      <div className="absolute inset-0 flex items-center justify-center z-10 ">
        <div className="w-[500px] aspect-square">
          <CircularText text="* GITHUB * UNKNOWN * FEATURES *" />
        </div>
      </div>

      {/* Middle Circle */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="w-[250px] aspect-square">
          <CircularText text="* GITHUB * UNKNOWN * FEATURES *" />
        </div>
      </div>

      {/* Inner Circle */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="w-[200px] aspect-square">
          <CircularText text="* GITHUB * UNKNOWN * FEATURES *" />
        </div>
      </div>
      </div>
    </div>

   <div className="w-full overflow-scroll px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <GridSmallBackgroundDemo />
      </div>
    </div>
    </>
  )
}
