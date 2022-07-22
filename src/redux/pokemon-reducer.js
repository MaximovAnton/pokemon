import { pokemonApi } from "../api/api";

const SET_POKEMONS = "SET_POKEMONS";
const NEXT = "NEXT";
const PREV = "PREV";
const CARD_ITEM = "CARD_ITEM";
const CARD_ARR = "CARD_ARR";

let initialState = {
  cardArr:[],
  categoryArr: [],
  pokemons: [],
  pageSize: 20,
  totalUsersCount: 20,
  next: [],
  previous: [],
  cardItems:[],
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS: {
      return { ...state, pokemons: action.pokemons };
    }

    case NEXT: {
      return { ...state, next: action.next };
    }

    case PREV: {
      return { ...state, previous: action.previous };
    }

    case CARD_ITEM: {
      return {...state, cardItem: action.cardItem}
    }

    case CARD_ARR: {
      return {...state, cardArr: action.cardArr}
    }

    default:
      return state;
  }
};

export const setPokemons = (pokemons) => ({ type: SET_POKEMONS, pokemons });
export const setNextPage = (next) => ({ type: NEXT, next });
export const setPrevPage = (previous) => ({ type: PREV, previous });
export const setCardItems = (cardItems) => ({type: CARD_ITEM, cardItems})
export const setCardArr = (cardArr) => ({type: CARD_ARR, cardArr})

export const getPokemons = () => {
  return (dispatch) => {
      pokemonApi.getPokemon().then((response) => {
        dispatch(setPokemons(response.results));
        dispatch(setNextPage(response.next));
        dispatch(setPrevPage(response.previous));
      });

  };
};

export const nextButton = (next) => {
  return (dispatch) => {
    pokemonApi.nextApi(next).then((response) => {
      dispatch(setPokemons(response.results));
      dispatch(setNextPage(response.next));
      dispatch(setPrevPage(response.previous));
  });
};
};

export const prevButton = (previous) => {
  return (dispatch) => {
    pokemonApi.prevApi(previous).then((response) => {
      dispatch(setPokemons(response.results));
      dispatch(setNextPage(response.next));
      dispatch(setPrevPage(response.previous));
    });
  };
};

export const cardUrlApi = (cardItems) => {
  return (dispatch) => {
    pokemonApi.urlCardItemsApi(cardItems).then((response) => {
      dispatch(setCardItems(response.data))
    })
  }
}

export default pokemonReducer;
