import Header from './components/Header';
import Footer from './components/Footer';
import DropdownArea from './components/DropdownArea';
import GenreArea from './components/GenreArea';
import MovieInfoArea from './components/MovieInfoArea';
import './styles/movie-page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { imdbIdsGenres } from './imdbIdsGenres';
import { useState } from 'react';

/* TO-DO:
1. Function in MovieInfoArea that is called when 'Reroll' is clicked. 
   This is where chosen genres are used against full id dictionary to get smaller list of genre-matching ids. 
   Then, a random id will be picked from that list and passed as param to getRandomMovie(). Then, may need to 
   reset smaller list back to empty.
2. getRandomMovie() is where the actual interaction with the API will be. use i = param_id, will need movie; title, poster, plot.
3. In the event user chooses combo of genres that no movie fits, poster area "No movie found", title "N/A", plot area "N/A".
*/


export default function App() {
  // 'genres' array holds list of selected genres
  // 'setGenres' function updates the array
  // 'useState([])' initialises 'genres' as empty array
  const [genres, setGenres] = useState([]);

  // adds new genre to list when called
  // '(genre)' is new string passed in from DropdownArea via 'onAdd'
  // '...genres' spreads the existing items in the list
  // 'genre' adds new one to the end of the list
  const addGenre = (genre) => {
    if (!genres.includes(genre)) {
    setGenres([...genres, genre]); //add genre to the list
    } else {
      console.log("Genre already added");
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
            <MovieInfoArea />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
