import React, { useState } from "react";

// so far, genre chosen is recognised. need to add them to a list so i can check list doesnt already contain x genre, 
// and so i can display on page from the list
function DropdownArea({ onAdd }) {
    // 'selected' holds current select value from dropdown (initialised as empty string "")
    // 'setSelected' is a function to update 'selected'
    // 'useState("") initialises 'selected' with empty string ""
    const [selected, setSelected] = useState("");

    // 'e' is event object passed from browser
    // 'e.target.value' gets value of currently selected option
    // 'setSelected(...)' updates 'selected' state with new selected value
    const handleChange = (e) => {
        setSelected(e.target.value);
    };

    // runs when "Add Genre" button is clicked
    // checks if 'selected' has a value (not empty)
    // then calls onAdd(...), which is a function passed from parent component (e.g. App.js) 
    //  to handle what to do with selected value (e.g. ADD IT TO A LIST)
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
            <option value="Romance">Romance/Rom-Com</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Musical">Musical</option>
            <option value="Sports">Sports</option>
            <option value="Western">Western</option>
        </select>&nbsp;
        <input type="button" id="add-genre-btn" className="dropdown-btn" onClick={handleClick} value="Add Genre" />
        <br />
        <br />
    </div>
    );
}

/*function setupAddGenreBtn() {
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
}*/

export default DropdownArea;