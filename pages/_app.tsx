import "@/styles/globals.css";
import { HeroHighlightDemo } from "@/components/HeroHighlightDemo";
import { GridSmallBackgroundDemo } from "@/components/GridSmallBackgroundDemo";
import TripleCircle from "@/components/ui/TripleCircle";
export default function App() {
  return (
    <>
 
    <HeroHighlightDemo />
     <TripleCircle />
   <div className="w-full overflow-scroll px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <GridSmallBackgroundDemo />
      </div>
    </div>
    </>
  )
}
