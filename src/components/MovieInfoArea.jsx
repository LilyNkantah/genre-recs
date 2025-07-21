import avengersPic from '../images/avengers-civil-war-poster.jpg'; //test data, to be removed later
import { imdbIdsGenres } from '../imdbIdsGenres';

// this will take an id as a parameter
// may have another function (should be in Movie) which is called before this one that gets list of ids 
//  that match chosen genres, then pick random id from that list and pass it to this function
function getRandomMovie() {
  // get response from API request, turn it into JS object, then get that value and call it data, then you can use it
  fetch("http://www.omdbapi.com/?apikey=f3eb4f32&i=tt1285016")
  .then((response) => response.json())
  .then((data) => { console.log(data); })
}

function MovieInfoArea() {
    return (
    <div className="col-6">
        <h2 className="centred-header">Chosen Title:</h2>
        <div className="flex">
            <div className="movie-pic-box">
                <img id="movie-pic" src={avengersPic} alt="movie poster" />
                <figcaption id="movie-title-text">Captain America: Civil War</figcaption>
            </div>
            <div id="movie-desc" className="movie-desc-box">
                With many people fearing the actions of super heroes, the government decides to push for the Hero Registration Act, 
                a law that limits a hero's actions. This results in a division in The Avengers. Iron Man stands with this Act, 
                claiming that their actions must be kept in check otherwise cities will continue to be destroyed, but Captain 
                America feels that saving the world is daring enough and that they cannot rely on the government to protect the 
                world. This escalates into an all-out war between Team Iron Man (Iron Man, Black Panther, Vision, Black Widow, War 
                Machine, and Spider-Man) and Team Captain America (Captain America, Bucky Barnes, Falcon, Scarlet Witch, Hawkeye, 
                and Ant Man) while a new villain emerges.
            </div>
        </div>
        <input type="button" className="reroll-btn" value="Reroll" />
    </div>
    );
}

export default MovieInfoArea;