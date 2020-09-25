import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  /* test results */
  // console.log(results);

  /* make a request inside of useEffect with axios using async code */
  useEffect(() => {
    // const search = async () => {
    //   const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
    //     params: {
    //       action: "query",
    //       list: "search",
    //       origin: "*",
    //       format: "json",
    //       srsearch: term,
    //     },
    //   });

    //   /* update results State */
    //   setResults(data.query.search);
    // };

    // /* reduce API requests */
    // const timeoutId = setTimeout(() => {
    //   /* don't search if a term is not provided */
    //   if (term) {
    //     search();
    //   }
    // }, 500);
    console.log("init term or term changed")

    /* clean up function, react will call this fn in a certain point in time */
    return () => {
      console.log("clean up")
    };
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
            target="_blank"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            type="text"
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
