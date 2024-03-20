import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useSelector, useDispatch } from "react-redux";
import {  rechercheFilms } from "../actions/getfilm.action";

function NavBar() {
  const dispatch = useDispatch();
  const recherche = useSelector((state) => state.FilmReducer.recherche);
  const ChangeRecherche = (event) => {
    // dispatch(resetPage())
    dispatch(rechercheFilms(event.target.value, 1)); // 1 Pour remettre a la première page quand on change la recherche
  };
  return (
    <header className="mb-5">
      <Navbar
        className="bg-dark justify-content-center"
        data-bs-theme="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand>
            <span className="text-warning fw-bold">Search</span>
            <i className="text-info">Films</i>
          </Navbar.Brand>
          <Form.Control
            onChange={ChangeRecherche}
            value={recherche}
            type="text"
            placeholder="Rechercher un film"
            className=" mr-sm-2"
          />
        </Container>
      </Navbar>
    </header>
  );
}
export default NavBar;
