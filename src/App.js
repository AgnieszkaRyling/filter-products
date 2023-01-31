import react, { useState } from "react";

import { productsList } from "./data/products.js";
import ProductCard from "./components/ProductCard";

import "./App.css";

const App = () => {
  console.log(productsList);

  const [filteredList, setFilteredList] = useState(productsList);
  const [inputSearchValue, setInputSearchValue] = useState("");

  const filterList = (e) => {
    const result = productsList.filter((product) =>
      product.title.includes(e.target.value)
    );
    setFilteredList(result);
  };
  console.log(filteredList);

  // SELECT CATEGORY

  const [selectedOption, setSelectedOption] = useState("");

  const selectCategory = (e) => {
    const result = productsList.filter(
      (product) => product.category === e.target.value
    );
    setFilteredList(result);
  };

  // SELECT COLOR
  const selectColor = (e) => {
    const result = productsList.filter(
      (product) => product.color === e.target.value
    );
    setFilteredList(result);
  };

  // RADIO

  const filterAvailable = (e) => {
    const selectedOption = e.target.value;
    const result = productsList.filter((product) => product.available);
    setFilteredList(result);
  };

  const showAll = (e) => {
    const result = productsList;
    setFilteredList(result);
  };
  return (
    <>
      <div className="container">
        <div className="filter-bar">
          <div className="filter-name-box">
            <input
              type="text"
              className="input-text"
              onChange={(e) => filterList(e)}
            />
          </div>
          <div className="select-container">
            <select
              className="select-category"
              value={selectedOption}
              onChange={(e) => selectCategory(e)}
            >
              <option value="">Category</option>
              <option value="spodnie">Spodnie</option>
              <option value="bluzki">Bluzki</option>
              <option value="sukienki">Sukienki</option>
              <option value="T-shirt">T-shirt</option>
              <option value="Swetry">Swetry</option>
            </select>
          </div>
          <div className="select-container">
            <select
              className="select-color"
              value={selectedOption}
              onChange={(e) => selectColor(e)}
            >
              <option value="">Kolor</option>
              <option value="red">Czerwony</option>
              <option value="green">Zielony</option>
              <option value="blue">Niebieski</option>
              <option value="yellow">Żółty</option>
              <option value="pink">Różowy</option>
              <option value="orange">Pomarańczowy</option>
              <option value="black">Czarny</option>
            </select>
          </div>
          <div className="radio-container">
            <div className="radio-box">
              <p className="radio-text">Show vailable only</p>
              <input
                type="radio"
                value="true"
                className="radio-icon"
                onChange={(e) => filterAvailable(e)}
              />
            </div>
            <div className="radio-box">
              <p className="radio-text">Show all</p>
              <input
                type="radio"
                className="radio-icon"
                onChange={(e) => showAll(e)}
              />
            </div>
          </div>
        </div>
        <div className="products-container">
          {filteredList.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
// zrób ezeby wyszkukiwarrka obslugiwala kategorie, selekt ktory bedzie obslugiwal kolory i rozmiary, dodac wiecej produktow, wlasciwosc dostepny, checkbox dodaj tylko dostepne produkty
export default App;
