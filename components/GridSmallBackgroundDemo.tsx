import { cn } from "@/lib/utils";
import React from "react";

export function GridSmallBackgroundDemo() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
<p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-transparent font-bold text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
        GitHub is a popular web-based platform used by developers and organizations to host, manage, and collaborate on software projects. It is built around Git, a version control system that tracks changes in code and allows multiple people to work on the same project efficiently.
        <br />
       edi anta naku telusu le gani intaki naku use enti <span className="text-orange-100"> ఈ </span>website custunnanduku
         
      </p>
    </div>
  );
}
