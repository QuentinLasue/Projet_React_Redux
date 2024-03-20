import axios from "axios";

export const getFilmTrend = "getFilmTrend";
export const getFilmPop = "getFilmPop";
export const getFilmDiscovery = "getFilmDiscovery";
export const rechercheFilm = "rechercheFilm";
export const getSerie = "getSerie";
export const next_page = "next_page";
export const previous_page = "previous_page";
export const reset_page = "reset_page";
export const ajout_favoris = "ajout_favoris";
export const getFavori = "getFavori";

export const getFilmTrends = (page) => {
  return async (dispatch) => {
    const reponse = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&language=fr-FR`
    );
    dispatch({
      type: getFilmTrend,
      payload: {
        page,
        films: reponse.data.results,
        nbrPage: reponse.data.total_pages,
      },
    });
  };
};
export const getFilmPops = (page) => {
  return async (dispatch) => {
    const reponse = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&language=fr-FR`
    );
    dispatch({
      type: getFilmPop,
      payload: {
        page,
        films: reponse.data.results,
        nbrPage: reponse.data.total_pages,
      },
    });
  };
};
export const getFilmDiscoverys = (page) => {
  return async (dispatch) => {
    const reponse = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&language=fr-FR`
    );
    dispatch({
      type: getFilmDiscovery,
      payload: {
        page,
        films: reponse.data.results,
        nbrPage: reponse.data.total_pages,
      },
    });
  };
};
export const rechercheFilms = (recherche, page) => {
  return async (dispatch) => {
    const reponse = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${recherche}&page=${page}&language=fr-FR`
    );
    dispatch({
      type: rechercheFilm,
      payload: {
        page,
        recherche,
        films: reponse.data.results,
        nbrPage: reponse.data.total_pages,
      },
    });
  };
};
export const getSeries = (page) => {
  return async (dispatch) => {
    const reponse = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&language=fr-FR`
    );
    dispatch({
      type: getSerie,
      payload: {
        page,
        films: reponse.data.results,
        nbrPage: reponse.data.total_pages,
      },
    });
  };
};

export const getFavoris = (listeFavoris)=>{
  return async (dispatch)=>{
    dispatch({
      type:getFavori,
      payload:{
        films:listeFavoris,
      },
    });
  };
};

export const nextPage = () => ({
  type: next_page,
});
export const previousPage = () => ({
  type: previous_page,
});
export const resetPage = () => ({
  type: reset_page,
});
export const ajoutFavori = (film) => {
  return (dispatch) => {
    dispatch({
      type: ajout_favoris,
      payload: {
        favoris: film,
      },
    });
  };
};
