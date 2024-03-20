import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap/esm/";
import { useDispatch, useSelector } from "react-redux";
import {  nextPage, previousPage } from "../actions/getfilm.action";

function Boutons() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.FilmReducer.page);
  const nbrPage = useSelector((state) => state.FilmReducer.nbrPage);

  const nexPage = () => {
    dispatch(nextPage());
  };

  const prevPage = () => {
    dispatch(previousPage());
  };

  return (
    <Row className="mb-5">
      <Col>
        <Button variant="outline-info" onClick={prevPage} size="lg">
          Page précédente
        </Button>
      </Col>
      <Col>
        <Button variant="outline-info" size="lg">
          Page {page} sur {nbrPage}
        </Button>
      </Col>
      <Col>
        <Button variant="outline-info" onClick={nexPage} size="lg">
          Page suivante
        </Button>
      </Col>
    </Row>
  );
}
export default Boutons;
