import React from "react";
import "./Card.scss";
import axios from "axios";

const Card = ({ state, name, url }) => {
  async function getData(url) {
    await axios.get(url).then((res) => {
      state.pokemonReducer.cardArr.length >= 20
        ? state.pokemonReducer.cardArr.splice(0, 20, res.data)
        : state.pokemonReducer.cardArr.push(res.data);
    });
  }
  getData(url);
 
  return (
    <div className="catalog__item" data-category="pokemonz">
      <div className="product catalog__product">
        <div className="product__content">
          <h3 className="product__title">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
