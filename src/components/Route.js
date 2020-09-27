/**
 * No need to import React when not using JSX
 * @param {path} window.location.pathname
 * children is the Component to show
 */
const Route = ({ path, children }) => {
  return window.location.pathname === path
    ? children
    : null;
};

export default Route;