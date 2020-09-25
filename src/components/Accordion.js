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

    const isActive = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${isActive}`}
          onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${isActive}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div>
      <div className="ui styled accordion">
        {renderedItems}
        </div>
    </div>
  );
};

export default Accordion;
