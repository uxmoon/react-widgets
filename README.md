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

## Accordion

We need to compare the index we are currently iterating over with the active index state, then add the active class.

```js
const isActive = index === activeIndex ? 'active' : '';
```