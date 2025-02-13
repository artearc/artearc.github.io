import React, { useState } from "react";
import Banner from './components/Banner';
import Catalog from "./components/Catalog";
import PricingInfo from "./components/PricingInfo";

import "./App.css";
import "./index.css";

const App = () => {
  const products = [
    { name: "SOL RING", image: "images/solring.jpg" },
    { name: "DARK RITUAL", image: "images/darkRitual.jpg" },
    { name: "OMNATH, LOCUS OF ALL", image: "images/omnath.jpg" },
    { name: "TREASURE TOKEN", image: "images/treasure.jpg" },
    { name: "WRENN THE REALMBREAKER", image: "images/wrenn.jpg" },
    { name: "AMINATOU, THE FATESHIFTER", image: "images/aminatou.jpg" },
    { name: "COPY TOKEN", image: "images/copy.jpg" },
    { name: "PROSPER, TOME-BOUND", image: "images/prosper.jpg" },
    { name: "CHROMATIC LANTERN", image: "images/chromaticLantern.jpg" },
  ];

  const pricingData = [
    { quantity: "5 cartas", pricePerCard: "5 €", totalPrice: "25 €", comments: "Pedido mínimo para cartas sueltas." },
    { quantity: "6-10 cartas", pricePerCard: "4,5 €", totalPrice: "Desde 27 €", comments: "Precio reducido por volumen pequeño." },
    { quantity: "11-17 cartas", pricePerCard: "4 €", totalPrice: "Desde 44 €", comments: "Ideal para probar varias cartas." },
    { quantity: "18 cartas (Pack Básico)", pricePerCard: "1,67 €", totalPrice: "30 €", comments: "Precio mucho más competitivo." },
    { quantity: "36 cartas (Pack Intermedio)", pricePerCard: "1,53 €", totalPrice: "55 €", comments: "Ahorro progresivo por cantidad." },
    { quantity: "72 cartas (Pack Pro)", pricePerCard: "1,39 €", totalPrice: "100 €", comments: "Pack para coleccionistas o grandes pedidos." }
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterProducts = (term) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Banner />
      <Catalog products={filteredProducts} />
      <PricingInfo pricingData={pricingData} />
    </div>
  );
};

export default App;
