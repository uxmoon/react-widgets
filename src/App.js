import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

/* static array */
const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework.",
  },
  {
    title: "Why us React?",
    content: "React is a favorite JS library among engineers.",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components.",
  },
];

const options = [
  {
    label: "The color red",
    value: "red"
  },
  {
    label: "The color green",
    value: "green"
  },
  {
    label: "The color blue",
    value: "blue"
  },
]

export default () => {
  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
};
