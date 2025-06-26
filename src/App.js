//import logo from './logo.svg';
import './App.css';

function FilterableMovieGrid({movies}) {

}

function SearchBar() {

}

function MovieGrid() {

}

function ThemeRow() {

}

function MovieInfo() {
  
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
  return <FilterableMovieGrid movies = {MOVIES} />;
}
