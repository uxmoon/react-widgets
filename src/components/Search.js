import React, { useState, useEffect } from "react";

const Search = () => {

  const [ term, setTerm ] = useState("");

  useEffect(() => {
    console.log("hello")
  }, [])

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            type="text" className="input"
          />
        </div>
      </div>
    </div>
  )
}

export default Search;