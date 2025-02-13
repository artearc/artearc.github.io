import React, { useState } from "react";
import solRingImg from "../assets/solring.jpg";
import darkRitualImg from "../assets/darkRitual.jpg";
import omnathImg from "../assets/omnath.jpg";
import treasureImg from "../assets/treasure.jpg";
import wrennImg from "../assets/wrenn.jpg";
import aminatouImg from "../assets/aminatou.jpg";
import copyImg from "../assets/copy.jpg";
import prosperImg from "../assets/prosper.jpg";
import chromaticLanternImg from "../assets/chromaticLantern.jpg";

// Definir productos del catálogo
const products = [
  { name: "SOL RING", image: solRingImg, type: ["artifact"], color: ["incoloro"] },
  { name: "DARK RITUAL", image: darkRitualImg, type: ["instant"], color: ["negro"] },
  { name: "OMNATH, LOCUS OF ALL", image: omnathImg, type: ["creature"], color: ["rojo", "verde", "negro", "azul", "blanco"]},
  { name: "TREASURE TOKEN", image: treasureImg, type: ["token"], color: ["incoloro"] },
  { name: "WRENN THE REALMBREAKER", image: wrennImg, type: ["planeswalker"], color: ["verde"] },
  { name: "AMINATOU, THE FATESHIFTER", image: aminatouImg, type: ["planeswalker"], color: ["blanco", "negro", "azul"]},
  { name: "COPY TOKEN", image: copyImg, type: ["token"], color: ["incoloro"] },
  { name: "PROSPER, TOME-BOUND", image: prosperImg, type: ["creature"], color: ["negro", "rojo"] },
  { name: "CHROMATIC LANTERN", image: chromaticLanternImg, type: ["artifact"], color: ["incoloro"] },
];

const Catalog = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [filterLogic, setFilterLogic] = useState("AND"); // Estado para seleccionar AND/OR

  // Función para manejar los cambios en los filtros de tipo
  const handleTypeChange = (event) => {
    const value = event.target.value;
    setSelectedTypes((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((type) => type !== value)
        : [...prevSelected, value]
    );
  };

  // Función para manejar los cambios en los filtros de color
  const handleColorChange = (event) => {
    const value = event.target.value;
    setSelectedColors((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((color) => color !== value)
        : [...prevSelected, value]
    );
  };

  // Función para resetear los filtros
  const resetFilters = () => {
    setSelectedTypes([]);
    setSelectedColors([]);
    setSearchTerm(""); // También reseteamos el término de búsqueda
  };

  // Función para manejar el cambio de lógica de filtrado (AND/OR)
  const handleFilterLogicChange = (event) => {
    setFilterLogic(event.target.value);
  };

  // Filtrar productos por tipo, color y nombre de carta
  const filteredProducts = products.filter((product) => {
    const matchesType =
      selectedTypes.length === 0 || selectedTypes.some((type) => product.type.includes(type)); // OR entre tipos seleccionados
    const matchesColor =
      selectedColors.length === 0 || 
      (filterLogic === "AND" 
        ? selectedColors.every((color) => product.color.includes(color))  // AND entre colores
        : selectedColors.some((color) => product.color.includes(color))   // OR entre colores
      );
    const matchesSearchTerm =
      product.name.toLowerCase().includes(searchTerm.toLowerCase());

    // Lógica de AND/OR para filtros
    if (filterLogic === "AND") {
      return (
        matchesType &&
        matchesColor &&
        matchesSearchTerm
      );
    } else { // Lógica de OR
      return (
        (matchesType || selectedTypes.length === 0) &&
        (matchesColor || selectedColors.length === 0) &&
        (matchesSearchTerm || searchTerm === "")
      );
    }
  });

  // Función para mostrar/ocultar los filtros
  const toggleFilters = () => setFiltersVisible(!filtersVisible);

  return (
    <div>
      {/* Barra de búsqueda */}
      <div className="search-container">
        <input
          type="text"
          id="searchInput"
          placeholder="Buscar por nombre de carta..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Botón para abrir el popup de filtros centrado */}
      <div className="filter-button-container">
        <button className="filter-button" id="filterInput" onClick={toggleFilters}>
          Filtros
        </button>
      </div>

      {/* Popup de filtros */}
      {filtersVisible && (
        <div className="filters-popup">
          <div className="filters-container">
            <div className="filter-card">
              <h3>Filtrar por tipo:</h3>
              <div className="filter-options">
                <label>
                  <input type="checkbox" value="creature" onChange={handleTypeChange} /> Creature
                </label>
                <label>
                  <input type="checkbox" value="artifact" onChange={handleTypeChange} /> Artifact
                </label>
                <label>
                  <input type="checkbox" value="instant" onChange={handleTypeChange} /> Instant
                </label>
                <label>
                  <input type="checkbox" value="sorcery" onChange={handleTypeChange} /> Sorcery
                </label>
                <label>
                  <input type="checkbox" value="enchantment" onChange={handleTypeChange} /> Enchantment
                </label>
                <label>
                  <input type="checkbox" value="land" onChange={handleTypeChange} /> Land
                </label>
                <label>
                  <input type="checkbox" value="token" onChange={handleTypeChange} /> Token
                </label>
                <label>
                  <input type="checkbox" value="planeswalker" onChange={handleTypeChange} /> Planeswalker
                </label>
              </div>
            </div>
            <div className="filter-card">
              <h3>Filtrar por color:</h3>
              <div className="filter-options">
                <label>
                  <input type="checkbox" value="rojo" onChange={handleColorChange} /> Rojo
                </label>
                <label>
                  <input type="checkbox" value="azul" onChange={handleColorChange} /> Azul
                </label>
                <label>
                  <input type="checkbox" value="verde" onChange={handleColorChange} /> Verde
                </label>
                <label>
                  <input type="checkbox" value="negro" onChange={handleColorChange} /> Negro
                </label>
                <label>
                  <input type="checkbox" value="blanco" onChange={handleColorChange} /> Blanco
                </label>
                <label>
                  <input type="checkbox" value="incoloro" onChange={handleColorChange} /> Incoloro
                </label>
              </div>
            </div>

            {/* Opción para elegir entre AND/OR */}
            <div className="filter-card">
              <h3>Seleccionar tipo de filtrado:</h3>
              <div className="filter-options">
                <label>
                  <input
                    type="radio"
                    value="AND"
                    checked={filterLogic === "AND"}
                    onChange={handleFilterLogicChange}
                  /> 
                  AND
                </label>
                <label>
                  <input
                    type="radio"
                    value="OR"
                    checked={filterLogic === "OR"}
                    onChange={handleFilterLogicChange}
                  />
                  OR
                </label>
              </div>
            </div>

            <div className="filter-actions">
              <button className="close-filters" onClick={toggleFilters}>
                Cerrar filtros
              </button>
              <button className="reset-filters" onClick={resetFilters}>
                Resetear filtros
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sección de productos filtrados */}
      <section className="catalog" id="catalog">
        <div id="cardsContainer">
          {filteredProducts.map((product) => (
            <div className="card" key={product.name}>
              <div className="basicInfo">
                <div className="title">
                  <div className="name">{product.name}</div>
                </div>
                <div className="images">
                  <div className="img">
                    <img src={product.image} alt={product.name} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Catalog;
