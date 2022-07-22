import React, { useEffect } from "react";
import "./Content.scss";
import { connect } from "react-redux";
import {
  nextButton,
  prevButton,
  getPokemons,
  setCardArr,
} from "../../redux/pokemon-reducer";
import "./Content.scss";
import Content from "./Content";

const ContainerContent = ({
  nextButton,
  prevButton,
  next,
  previous,
  pokemons,
  getPokemons,
  state,
  cardArr,
  setCardArr,
}) => {
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Content
      next={next}
      previous={previous}
      pokemons={pokemons}
      nextButton={nextButton}
      prevButton={prevButton}
      getPokemons={getPokemons}
      state={state}
      cardArr={cardArr}
      setCardArr={setCardArr}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    categoryArr: state.pokemonReducer.categoryArr,
    pokemons: state.pokemonReducer.pokemons,
    pageSize: state.pokemonReducer.pageSize,
    totalUsersCount: state.pokemonReducer.totalUsersCount,
    next: state.pokemonReducer.next,
    previous: state.pokemonReducer.previous,
    cardItems: state.pokemonReducer.cardItems,
    cardArr: state.pokemonReducer.cardArr,
  };
};

const ContentContainer = connect(mapStateToProps, {
  getPokemons,
  nextButton,
  prevButton,
  setCardArr,
})(ContainerContent);

export default ContentContainer;
