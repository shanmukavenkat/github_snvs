import React from "react";
import CircularText from "./CircularText/CircularText";



const TripleCircle: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[300px] mx-auto">

      {/* Outer Circle */}
      <CircularText
        text="github**unknown**features**snvs**komal**" 
        spinDuration={20}
        onHover="speedUp"
        className="w-[300px] h-[300px] text-black text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Inner Circle - Reduced size to prevent overlap */}
      <CircularText
        text="github**unknown**features**" 
        spinDuration={10}
        onHover="speedUp"
        className="w-[50px] h-[50px] text-violet-500 text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
        {/* Center Logo */}
        <div className="absolute inset-0  flex items-center justify-center">
        <img
          src="/GithubSnv.svg"
          alt="Logo"
          width={60}
          height={60}
          className="w-16 h-16 mb-5"
          />
          </div>
    </div>
  );
};

export default TripleCircle;
