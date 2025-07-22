import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DropdownArea from './components/DropdownArea';
import GenreArea from './components/GenreArea';
import MovieInfoArea from './components/MovieInfoArea';
import './styles/movie-page.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [genres, setGenres] = useState([]);
  
  const addGenre = (genre) => {
    if (!genres.includes(genre)) {
      setGenres(prev => [...prev, genre]); //add genre to the list
    } else {
      console.warn("Genre already added");
    }
  };

  const clearGenres = () => {
    setGenres([]);
  };

  return (
    <div>
      <Header />
      <main>
        <div className="container-fluid">
          <div className="dropdown-area">
            <DropdownArea onAdd={addGenre} />
          </div>
          <div className="row">
            <GenreArea genres={genres} onClear={clearGenres}/>
            <div className="vertical"></div>
            <MovieInfoArea chosenGenres={genres}/> 
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
