import React, { useState } from "react";

const Accordion = ({ items }) => {
  /* useState is a hook, gives us access to State inside of a fn component */
  const [activeIndex, setActiveIndex] = useState(null);

  /* Helper function */
  const onTitleClick = (index) => {
    // console.log("title clicked", index);

    /* update State */
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className="title active"
          onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
