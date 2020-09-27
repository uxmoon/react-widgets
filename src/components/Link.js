import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    /* prevent page refresh on click */
    event.preventDefault();

    /* update url without page refresh */
    window.history.pushState({}, '', href);

    /* Emmit a navigation event to the Route components */
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
