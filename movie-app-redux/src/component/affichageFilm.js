import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  rechercheFilms,
  getFilmTrends,
  getFilmDiscoverys,
  getFilmPops,
  getSeries,
  getFavoris,
} from "../actions/getfilm.action";
import { Container, Row, Col } from "react-bootstrap";
import FilmCards from "./CardsFilm";
import Boutons from "./Bouton";
import NavBar from "./NavBar";
import ScrollBouton from "./ScrollBouton";
import Carroussel from "./Carroussel";
import Categories from "./catégories";
import Footer from "./footer";

function AffichageFilms() {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.FilmReducer.films);
  const recherche = useSelector((state) => state.FilmReducer.recherche);
  const page = useSelector((state) => state.FilmReducer.page);
  const [listeAfficher, setListeAfficher] = useState("trendFilm");
  const fav = useSelector((state) => state.FilmReducer.favoris);

  useEffect(() => {
    if (recherche) {
      dispatch(rechercheFilms(recherche, page));
    } else if (listeAfficher === "PopFilm") {
      dispatch(getFilmPops(page));
    } else if (listeAfficher === "discoveryFilm") {
      dispatch(getFilmDiscoverys(page));
    } else if (listeAfficher === "trendingSerie") {
      dispatch(getSeries(page));
    } else if (listeAfficher === "favoris") {
      dispatch(getFavoris(fav));
    } else {
      dispatch(getFilmTrends(page));
    }
  }, [recherche, page, listeAfficher,dispatch,fav]);

  return (
    <>
      <NavBar />

      <Carroussel />
      <Categories listeAfficher={listeAfficher} setListeAfficher={setListeAfficher} />
      <ScrollBouton />

      <Container className="mt-5">
        <Row className="justify-content-center">
          {films.length ===0 ?
          <Col>
          <h1 className="text-center text-info m-5">Vous n'avez aucun favoris.</h1> 
          </Col>
          :
          films.map((film) => (
            <FilmCards key={film.id} movie={film} />
          ))}

          <Boutons />
        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default AffichageFilms;
