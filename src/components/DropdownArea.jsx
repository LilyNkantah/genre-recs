function DropdownArea() {
    return (
    <div>
        <select className="dropdown-input" placeholder="Add a Genre...">
            <option value="adventure">Adventure</option>
            <option value="action">Action</option>
            <option value="drama">Drama</option>
            <option value="comedy">Comedy</option>
            <option value="thriller">Thriller/Mystery</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance/Rom-Com</option>
            <option value="science-fiction">Sci-Fi</option>
            <option value="fantasy">Fantasy</option>
            <option value="musical">Musical</option>
            <option value="sports">Sports</option>
            <option value="western">Western</option>
        </select>&nbsp;
        <input type="button" className="dropdown-btn" value="Add Genre" />
        <br />
        <br />
    </div>
    );
}

export default DropdownArea;