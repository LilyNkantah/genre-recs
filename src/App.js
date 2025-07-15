//import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import DropdownArea from './components/DropdownArea';
import GenreArea from './components/GenreArea';
import MovieInfoArea from './components/MovieInfoArea';
import './styles/movie-page.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function FilterableMovieGrid({movies}) {
/* should go:
  search area stuff
  horizontal divider
  movie grid which contains both theme card and movie card
*/

  return (
  <div>
    <SearchBar />
    <MovieGrid movies={movies} />
  </div>
);
}

function SearchBar() { //search area stuff needs to go in here
return (
  <form>
    <input type="text" placeholder="Search themes..." />
  </form>
);
}

function MovieGrid({movies}) {
  /* should go:
  theme card
  vertical divider
  movie card
*/
  const themeEntries = [];
  
  movies.forEach((movie) => { 
    /*iterate through movie.theme for each movie. add it to themeEntries list if it does not already exist
    if !movie.theme.contains(...) {
      themeEntries.push(
        <ThemeRow theme={movie.theme[i]} />
      ) 
    }*/
  });

  return (
    <>
      <div>
        <ThemeRow movies={movies}/>
      </div>
      <div>
        <MovieInfo movies={movies} />
      </div>
    </>
  );
}

function ThemeRow({movies}) { //this is where all the theme card stuff should go
return (
  <table>
    <thead>
      <tr>
        <th>Themes Present</th>
      </tr>
    </thead>
    <tbody>Rows will go here</tbody>
  </table>

);
}

function MovieInfo({movies}) { //this is where all the movie card stuff should go
return (
  <>
    <div>
      <div>Img here</div>
      <div>Desc box here</div>
    </div>
    <div>Reroll button here</div>
  </>
);
}


const MOVIES = [
  {title: "How To Lose A Guy In 10 Days", theme: "Romance", description: "An advertising executive and ladies' man, to win a big campaign, bets that he can make a woman fall in love with him in 10 days."},
  {title: "The Conjuring", theme: "Horror", description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse."},
  {title: "Die Hard", theme: "Action", description: "A New York City cop, John McClane, tries to save his estranged wife and several others taken hostage by terrorists during a Christmas Eve party at the Nakatomi Plaza Skyscraper in Los Angeles, California."},
  {title: "Se7en", theme: "Thriller", description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives."},
  {title: "The Hangover", theme: "Comedy", description: "Three buddies wake up from a bachelor party in Las Vegas with no memory of the previous night and the bachelor missing. They must make their way around the city in order to find their friend in time for his wedding."},
  {title: "John Wick", theme: "Action", description: "John Wick is a former hitman grieving the loss of his true love. When his home is broken into, robbed, and his dog killed, he is forced to return to action to exact revenge."}
];

export default function App() {
  /* should go:
  header (need to make it a component)
  main which contains filterable movie grid
  footer (need to make it a component)
  horizontal divider
  movie grid which contains both theme card and movie card
*/

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
