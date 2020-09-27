import { useEffect, useState } from 'react';
/**
 * No need to import React when not using JSX
 * @param {path} window.location.pathname
 * children is the Component to show
 */
const Route = ({ path, children }) => {

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      //console.log('location changed');
      setCurrentPath(window.location.pathname)
    };
    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);
  return currentPath === path ? children : null;
};

/* Listen to navigation event */

export default Route;
