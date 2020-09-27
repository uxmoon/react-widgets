import { useEffect } from 'react';
/**
 * No need to import React when not using JSX
 * @param {path} window.location.pathname
 * children is the Component to show
 */
const Route = ({ path, children }) => {
  useEffect(() => {
    const onLocationChange = () => {
      console.log('location changed');
    };
    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);
  return window.location.pathname === path ? children : null;
};

/* Listen to navigation event */

export default Route;
