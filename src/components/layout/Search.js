import React from "react";

function Search() {
  return(
    <div>
      <style>padding-left:5px</style>
      <form action="/action_page.php">
        <input type="text" id="search" />
        <input type="submit" value="Etsi" />
      </form>
    </div>
  );
};

export default Search;
