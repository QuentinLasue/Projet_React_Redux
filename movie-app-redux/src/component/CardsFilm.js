import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modals from "./modal";

function FilmCards(props) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const image = props.movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`
    : `https://thumbs.dreamstime.com/b/popcorn-soda-takeaway-d-cinema-glasses-design-illus-illustration-eps-75522958.jpg`;

  return (
    <>
      <Card
        border="info"
        style={{ width: "18rem" }}
        className="m-5 border-2 bg-black"
        onClick={handleShow}
      >
        <Card.Img variant="top" src={image} alt={props.movie.title} />
        <Card.Body>
          <Card.Title className="text-light">
            {props.movie.title ? props.movie.title : props.movie.name}
          </Card.Title>
          <Button variant="outline-info">En savoir plus</Button>
        </Card.Body>
      </Card>
      <Modals show={show} setShow={setShow} props={props.movie} />
    </>
  );
}

export default FilmCards;
