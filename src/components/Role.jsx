import React from "react";

const images = [
  { src: "WEBFLOW.png", alt: "WEBFLOW" },
  { src: "./Expertise.png", alt: "Expertise" },
  { src: "./FIGMA.png", alt: "FIGMA" },
  { src: "./Expertise.png", alt: "Expertise" },
  { src: "./DESIGNER.png", alt: "DESIGNER" },
  { src: "./Expertise.png", alt: "Expertise" },
  { src: "./DEVELOPER.png", alt: "DEVELOPER" },
];

function Role() {
  return (
    <div className="flex justify-center md:justify-between items-center gap-2 md:gap-4 py-16">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="w-16 md:w-auto h-auto"
        />
      ))}
    </div>
  );
}

export default Role;
