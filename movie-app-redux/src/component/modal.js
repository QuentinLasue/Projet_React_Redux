import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/esm/Button";
import { Col, Container, Row } from "react-bootstrap/esm/";
import { useDispatch, useSelector } from "react-redux";
import { ajoutFavori } from "../actions/getfilm.action";

function Modals({ show, setShow, props }) {
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const favoris = useSelector((state) => state.FilmReducer.favoris);
  const newFavoris = [...favoris];
  const indexFavoris = newFavoris.findIndex((fav) => fav === props);
  const isFavoris= favoris.some((fav)=>fav.id ===props.id);
  
  const addFavoris = (film) => {
    if (indexFavoris === -1) {
      newFavoris.push(film);
      // console.log("nouvelle liste fav + : " + newFavoris);
      dispatch(ajoutFavori(newFavoris));
    } else {
      newFavoris.splice(indexFavoris, 1);
      // console.log("nouvelle liste fav - : " + newFavoris);
      dispatch(ajoutFavori(newFavoris));
    }
  };
  
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        className="bg-info text-light border-black"
        closeButton
        closeVariant="white"
      >
        <Modal.Title>{props.title ? props.title : props.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-black text-light">
        <Container>
          <Row>
            <Col>
              <Image
                src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
                alt={props.title}
                thumbnail
              />
            </Col>
            <Col>
              <h1>{props.title ? props.title : props.name}</h1>
              <p>
                {" "}
                Date de sortie :{" "}
                {props.release_date ? props.release_date : props.first_air_date}
              </p>
              <Button variant="info">{props.vote_average}</Button>
              <Button
                // variant="outline-warning"
                variant={isFavoris ? "warning" : "outline-warning"}
                className="m-3"
                onClick={() => addFavoris(props)}
              >
                ☆
              </Button>
              <hr></hr>
              <h4>Synopsis</h4>
              <p>{props.overview}</p>
              <Image
                src={`https://image.tmdb.org/t/p/w1280${props.backdrop_path}`}
                alt={props.title}
                thumbnail
                fluid
              />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="bg-info text-light border-black">
        <Button variant="outline-light" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Modals;
