import React, { useEffect, useState, useRef } from "react";
import "./Content.scss";
import Card from "./Card/Card.jsx";

const Content = ({
  next,
  previous,
  prevButton,
  nextButton,
  pokemons,
  state,
  cardArr,
}) => {
  const [pokemon, setPokemon] = useState(pokemons);

  useEffect(() => {
    setPokemon(pokemons);
  }, [pokemons]);

  const inputRef = useRef();

  const onFilteredPokemon = () => {
    let filterUser = pokemons.filter(
      (item) =>
        item.name.toLowerCase().indexOf(inputRef.current.value.toLowerCase()) ==
        0
    );
    setPokemon(filterUser);
  };

  return (
    <>
      <div className={"buttonBox"}>
        {previous === null || previous.length === 0 ? (
          <button disabled className={"buttonBox__btn"}>
            Prev
          </button>
        ) : (
          <button
            className={"buttonBox__btn"}
            onClick={() => {
              inputRef.current.value = "";
              prevButton(previous);
            }}
          >
            Prev
          </button>
        )}

        <button
          className={"buttonBox__btn"}
          onClick={() => {
            inputRef.current.value = "";
            nextButton(next);
          }}
        >
          Next
        </button>
      </div>
      <h2>Поиск по названию</h2>
      <input ref={inputRef} type="text" onChange={onFilteredPokemon} />

      <section className="section section-catalog">
        <div className="container">
          <div className="catalog">
            {pokemon.map((item, index) => (
              <Card
                name={item.name}
                url={item.url}
                state={state}
                pokemon={pokemon}
                cardArr={cardArr}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
