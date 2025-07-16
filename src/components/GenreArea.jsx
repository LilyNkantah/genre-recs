function GenreArea({ genres, onClear }) {
    // genres.map line:
    // 'genres.map(...)' loops through each genre (string) in array
    // 'g' is the genre name e.g. "Adventure"
    // 'i' is the index (used as a unique key, fine for small, static lists)
    return (
    <div className="col-4">
        <h2 className="centred-header">Genres Present:</h2>
        <div className="flex-col">
            <div>
                <ul id="chosen-genre-list" className="list-items">
                    {genres.map((g, i) => <li className="spaced-list" key={i}>{g}</li>)}
                </ul>
            </div>
            <div>
                <input type="button" className="clear-btn" onClick={onClear} value="Clear All" />
            </div>
        </div>
    </div>
    );
}

export default GenreArea;