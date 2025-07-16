import Header from './components/Header';
import Footer from './components/Footer';
import DropdownArea from './components/DropdownArea';
import GenreArea from './components/GenreArea';
import MovieInfoArea from './components/MovieInfoArea';
import './styles/movie-page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function FilterableMovieGrid({movies}) {

}

/*  function Dropdown() { 
    //put functionality for adding genre to page here. when clicked, it should be added to list
    console.log("entered func");
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", setupAddGenreBtn);
    } else {
      setupAddGenreBtn();
    }
  }

  function setupAddGenreBtn() {
    console.log("entered inner func");
    const genreDropdown = document.getElementById("genre-dropdown");
    const addGenreBtn = document.getElementById("add-genre-btn");

    if (addGenreBtn) {
      addGenreBtn.addEventListener("click", () => {
      const selectedGenre = genreDropdown.value;
      console.log("Selected genre: ", selectedGenre);
    })
    } else {
      console.log("button null");
    }
  }
*/

function MovieGrid({movies}) {
  const themeEntries = [];
  
  movies.forEach((movie) => { 
    /*iterate through movie.theme for each movie. add it to themeEntries list if it does not already exist
    if !movie.theme.contains(...) {
      themeEntries.push(
        <ThemeRow theme={movie.theme[i]} />
      ) 
    }*/
  });
}

function ThemeRow({movies}) { 

}

function MovieInfo({movies}) { 

}

export default function App() {
  // 'genres' is array that holds list of selected genres
  // 'setGenres' is function to update array
  // 'useState([])' initialises 'genres' as empty array
  const [genres, setGenres] = useState([]);

  // adds new genre to list when called
  // '(genre)' is new string passed in from DropdownArea comp via 'onAdd'
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
