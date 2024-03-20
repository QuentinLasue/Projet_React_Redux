import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { useDispatch } from "react-redux";
import { resetPage } from "../actions/getfilm.action";
import { useState } from "react";

function Categories({listeAfficher, setListeAfficher}) {
  const dispatch = useDispatch();
  const [btnVertical,setBtnVertical] = useState(window.innerWidth>600 ?false :true)
  let screenWidth = window.innerWidth;
  window.addEventListener('resize', () => {
    // Mise à jour la valeur avec la nouvelle largeur de la fenêtre
    screenWidth = window.innerWidth;
    if(screenWidth<=600){
    setBtnVertical(true)
    }else{
    setBtnVertical(false)
    }
  });
  

  const trendFilm = () => {
    setListeAfficher("trendFilm");
    dispatch(resetPage());
  };

  const popFilm = () => {
    setListeAfficher("PopFilm");
    dispatch(resetPage());
  };

  const discoveryFilm = () => {
    setListeAfficher("discoveryFilm");
    dispatch(resetPage());
  };
  const trendingSerie=()=>{
    setListeAfficher("trendingSerie");
    dispatch(resetPage());
  }
  const favoris=()=> {
    setListeAfficher("favoris");
    dispatch(resetPage());
  }
  const categories = [
    {
      nom: "Trending films",
      onclick: trendFilm,
    },
    {
      nom: "Popular films",
      onclick: popFilm,
    },
    {
      nom: "Discovery films",
      onclick: discoveryFilm,
    },
    {
      nom: "Trending Series",
      onclick: trendingSerie,
    },
    {
      nom:"Favoris",
      onclick:favoris,
    }
  ];

  return (
    <>
      <ButtonToolbar className="justify-content-center m-5" id="btnCategories" >
        <ButtonGroup  size="lg" {...btnVertical ? {vertical : true}:{vertical : false}} className="m-4">
          {categories.map((cat) => (
            <Button  key={cat.nom} variant="outline-info" onClick={cat.onclick} className="btn-lg">
              {cat.nom}
            </Button>
          ))}
        </ButtonGroup>
      </ButtonToolbar>


    </>
  );
}

export default Categories;
