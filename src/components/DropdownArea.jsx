import { useState } from "react";

function DropdownArea({ onAdd }) {
    const [selected, setSelected] = useState("");

    // 'e' is event object passed from browser
    // 'e.target.value' gets value of currently selected option
    const handleChange = (e) => {
        setSelected(e.target.value);
    };

    const handleClick = () => {
        if (selected) {
            onAdd(selected);
            console.log("selected: ", selected);
        }
    };
    
    return (
    <div>
        <select id="genre-dropdown" className="dropdown-input" onChange={handleChange} value={selected}>
            <option value="" disabled>Add a Genre...</option>
            <option value="Adventure">Adventure</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Thriller">Thriller</option>
            <option value="Horror">Horror</option>
            <option value="Crime">Crime</option>
            <option value="Romance">Romance/Rom-Com</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Musical">Musical</option>
            <option value="Sport">Sport</option>
            <option value="Western">Western</option>
            <option value="Biography">Biography</option>
        </select>&nbsp;
        <input type="button" id="add-genre-btn" className="dropdown-btn" onClick={handleClick} value="Add Genre" />
        <br /><br />
    </div>
    );
}

export default DropdownArea;