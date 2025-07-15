import Header from './components/Header';
import Footer from './components/Footer';
import DropdownArea from './components/DropdownArea';
import GenreArea from './components/GenreArea';
import MovieInfoArea from './components/MovieInfoArea';
import './styles/movie-page.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function FilterableMovieGrid({movies}) {

}

function Dropdown() { 

}

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
  return (
    <div>
      <Header />
      <main>
        <div className="container-fluid">
          <div className="dropdown-area">
            <DropdownArea />
          </div>
          <div className="row">
            <GenreArea />
            <div className="vertical"></div>
            <MovieInfoArea />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
