# Understanding Hooks in React

## Understanding useSate

**useState**: function that lets you use **state** in a functional component.

### Usage

We call useState from the React library

```jsx
import React, { useState } from "react";
```

### Syntax

Use **array destructuring**, shortcut to get references to elements inside of an Array.

```js
// Array
const colors = ["red", "green"];
```

Call individual items inside the array:

```js
const redColor = colors[0];
const greenColor = colors[1];
```

Using **array destructuring** we use the following syntax:

```js
const [firstElement, secondElement] = colors;
```

- On the left **we are not** creating an array
- We tell Js we want to access the first item of the array and assign it to a variable

```jsx
// Array
const things = useState(null);

// Before
const activeIndex = things[0];
const setActiveindex = things[1];

// After
const [activeIndex, setActiveIndex] = useState(null);
```

### Individual names

- `activeIndex` is a value that will change over time, element to keep track of.
- `setActiveIndex` is a function to call when we need to update our state (setter function).
- `useState` takes a default value, the initial value is set to `activeIndex`.

### Examples

Name of a person

```jsx
const [name, setName] = useState("");
```

- The initial value is an empty string

Counter

```jsx
const [counter, setCounter] = useState(0);
```

Color

```jsx
const [color, setColor] = useState("green");
```

### Class Components vs Function Components

| | Class components | Function components |
| --- | --- | --- |
| Initialization | state={ activeIndex: 0 } | useState(0) |
| Reference | this.state.activeIndex | activeIndex; |
| Updates | this.setState({ activeIndex: 10 }) | setActiveIndex(10); |

**Class components**

Very easy to define and change multiple pieces of state at the same time.

**Function components**

If we want to have multiple pieces of states, we call useState multiple times. We define and initialize index and search term piece of state. And then call both setters to update.

---

## Widget: Accordion

**Hooks**: useState

We need to compare the index we are currently iterating over with the active index state, then add the active class.

```js
const isActive = index === activeIndex ? 'active' : '';
```

---

## Widget: List

**Hooks**: useState, useEffect

We use hooks to track our State, but we use the same approach as Class based components.

- Assign a **value prop** to the search input
- Assign an **onChange event handler**. Anytime the value inside that input has changed we need to update the State piece that keep track of the value. That input is going to cause our component to re render and see the new value inside of it.

**API request**

Make a request to the Wikipedia API only when we detected that the component has re rendered and term has changed.

**useEffect**

We use the hook to add code to detect that *term* has changed.

- Allows fn components to use *something like*  lifecycle methods, e.g. run some code when the component first render to the screen, when is re rendered, or something else happens.
- When we make use of **useEffect** we provide some configuration to when we run some code automatically in one of three scenarios.

1. When the component is rendered *for the first time only*.
1. When the component is rendered *for the first time and rerenders*.
1. When the component is rendered *for the first time and (whenever it rerenders and some piece of data has changed)*

### useEffect Usage and Syntax

- Import from React library
- Call useEffect...
- ...provide a fn as a first argument
- provide a second argument to specify a scenario: nothing, an empty array or an array with values inside of it.

```js
import React, { useState, useEffect } from "react";

const Search = () => {
  useEffect(() => {
    console.log("hello")
  }, [])
```

### useEffect second argument

| `[]` | `...nothing...` | `[data]` |
| --- | --- | --- |
| Run at initial render | Run at initial render | Run at initial render |
|  | Run after every rerender | Run after every rerender *if* data has changed since last render |

---

## Widget: Dropdown

**Hooks**: useState, useEffect, useRef

---

## Widget: Translate

**Hooks**: useState, useEffect, useRef