import { imdbIdsGenres } from '../imdbIdsGenres';
import Axios from "axios";
import { useState } from 'react';

function MovieInfoArea({ chosenGenres }) {
    //JSON.parse(JSON.stringify(...)) lets you create deep copy so modifying one copy doesnt affect the other
    const originalImdbIdsGenres = JSON.parse(JSON.stringify(imdbIdsGenres));
    const handleClick = ({ chosenGenres }) => {
        console.log("original: ", Object.keys(originalImdbIdsGenres).length);
        let filteredImdbIdsGenres = JSON.parse(JSON.stringify(originalImdbIdsGenres));
        console.log("chosen list: ", chosenGenres);
        for (const genre of chosenGenres) {
            console.log("gen: ", genre);
            for (const [id, genres] of Object.entries(filteredImdbIdsGenres)) {
                if (!genres.includes(genre)) {
                    console.log("ENTERED IF");
                    delete filteredImdbIdsGenres[id];
                }
            }
        }
        //at this point, dictionary only has movies that fit chosen genres
        console.log("length: ", Object.keys(filteredImdbIdsGenres).length);
        const randomIndex = Math.floor(Math.random() * Object.keys(filteredImdbIdsGenres).length); 
        const randomMovieId = (Object.keys(filteredImdbIdsGenres))[randomIndex];
        console.log("random id: ", randomMovieId);
        if (randomMovieId) {
            getRandomMovie(randomMovieId);
        } else {
            setMovieData([null, null, null]);
            console.warn("randomMovieId is undefined!");
        }
    }

    const [movieData, setMovieData] = useState([null, null, null]);

    async function getRandomMovie(randomMovieId) {
        try {
            //have to use await and async function to store response when getting data from an API
            const response = await Axios.get(`https://www.omdbapi.com/?apikey=f3eb4f32&i=${randomMovieId}`)
            console.log("response: ", response);
            setMovieData([response.data.Title, response.data.Plot, response.data.Poster]);
        } catch (error) {
            console.error("Failed to fetch movie data: ", error);
        }
    }

    return (
        <div className="col-6">
            <h2 className="centred-header">Chosen Title:</h2>
            <div className="flex">
                <div className="movie-pic-box">
                    {movieData[2] ? (
                        <img id="movie-pic" src={movieData[2]} alt="movie poster" />
                    ) : (
                        <p>No poster available</p>
                    )}
                    <figcaption id="movie-title-text">
                        {movieData[0] ? (
                            <p>{movieData[0]}</p>
                        ) : (
                            <p className="no-title">No title available</p>
                        )}
                    </figcaption>
                </div>
                <div id="movie-desc" className="movie-desc-box">
                    {movieData[1] ? (
                        <p>{movieData[1]}</p>
                    ) : (
                        <p>No plot available</p>
                    )}
                </div>
            </div>
            <input type="button" className="reroll-btn" onClick={() => handleClick({chosenGenres})} value="Reroll" />
        </div>
    );
}

export default MovieInfoArea;