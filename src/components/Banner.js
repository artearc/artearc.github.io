import React, { useEffect } from "react";

// Importar las imágenes al inicio del archivo
import darkRitual from "../assets/darkRitual.jpg";
import omnath from "../assets/omnath.jpg";
import solring from "../assets/solring.jpg";
import treasure from "../assets/treasure.jpg";
import wrenn from "../assets/wrenn.jpg";
import aminatou from "../assets/aminatou.jpg";
import copy from "../assets/copy.jpg";
import prosper from "../assets/prosper.jpg";
import chromaticLantern from "../assets/chromaticLantern.jpg";

const Banner = () => {
  useEffect(() => {
    const bannerImages = [
      { src: darkRitual, alt: "Dark Ritual" },
      { src: omnath, alt: "Omnath" },
      { src: solring, alt: "Sol Ring" },
      { src: treasure, alt: "Treasure" },
      { src: wrenn, alt: "Wrenn" },
      { src: aminatou, alt: "Aminatou" },
      { src: copy, alt: "Copy" },
      { src: prosper, alt: "Prosper" },
      { src: chromaticLantern, alt: "Chromatic Lantern" },
    ];

    const slider = document.getElementById("slider");
    if (slider) {
      slider.style.setProperty("--quantity", bannerImages.length);
      bannerImages.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.style.setProperty("--position", index + 1);
        item.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
        slider.appendChild(item);
      });
    }
  }, []);

  return (
    <div className="banner">
      <div className="slider" id="slider"></div>
      <div className="content">
        <h1 data-content="SHOP">ART</h1>
        <div className="author">
          <h2>ARTEARC</h2>
          <p><b>Custom cards</b></p>
          <p>Contact me if you're interested</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
