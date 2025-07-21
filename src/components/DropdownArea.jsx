import React, { useState } from "react";

function DropdownArea({ onAdd }) {
    // 'selected' holds current selected value from dropdown (initialised as empty string "")
    // 'setSelected' function updates 'selected'
    // 'useState("")' initialises 'selected' with the empty string ""
    const [selected, setSelected] = useState("");

    // 'e' is event object passed from browser
    // 'e.target.value' gets value of currently selected option
    // 'setSelected(...)' updates 'selected' state with new selected value
    const handleChange = (e) => {
        setSelected(e.target.value);
    };

    // checks if 'selected' has a value (not empty)
    // then calls onAdd(...) to handle what is done with selected value (e.g. ADD IT TO A LIST)
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
            <option value="Thriller/Mystery">Thriller/Mystery</option>
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
        <br />
        <br />
    </div>
    );
}

export default DropdownArea;