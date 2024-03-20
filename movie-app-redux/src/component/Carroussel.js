import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function Carroussel() {
  const [movies,setMovies] = useState([]);
  
  const getFilmPop = async ()=>{
    try{const movie = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
    setMovies(movie.data.results)
    }catch(error){
                console.log('Error fetching data: ',error);
                }
  }
  getFilmPop();
  return (
    <Carousel id='carouselPop' >
        {movies.map((movie)=>(
            <Carousel.Item interval={3000} key={movie.id}>
              <Image src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} />
                <Carousel.Caption>
                  <h1 className='text-warning'>{movie.title}</h1>
                </Carousel.Caption>
            </Carousel.Item> ))} 
    </Carousel>
  );
}

export default Carroussel;