import React, { useState } from "react";

function Search({onFilter}) {
  const initSearch = {title:""}
  const [addSearch, setSearch] = useState(initSearch);

  const handleFilter = (e) => {
    setSearch({[e.target.name]: e.target.value});
    // console.log("e.target.value: " + e.target.value);
    onFilter(e.target.value);
  }

  return(
    <div>
      <input type="text"
        name="title"
        value={addSearch.title}
        placeholder="Etsi"
        style={{padding:"3px"}}
        onChange={handleFilter}>
      </input>
    </div>
  );
};

export default Search;
