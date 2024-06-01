### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
- React is a Javascript library for building user interfaces, primarily for single-page applications. You would use React when you want to build dynamic, high-performance web applications with complex UIs.

- What is Babel?
- Babel is a javascript compiler that converts ECMAScript 2015 and beyond into a backward-compatible version of javascript that can run in older environments.

- What is JSX?
- JSX is a syntax extension for javascript that allows developers to write HTML-like code within their javascript.

- How is a Component created in React?
- A React component can be created with a regular function that returns JSX or with a class component.

- What are some difference between state and props?
- State is managed within the component, can be modified using 'this.setState' in class components or 'useState' in function components, and also respresents the component's local state. Props are passes to the component by it parent, are read-only and cannot be modified by the component itself, and are used to pass data and event handlers to child components.

- What does "downward data flow" refer to in React?
- It refers to the principle that data in a React application flows from parent to components to child to components via props.

- What is a controlled component?
- It is a form element in React whose value is controlled by the component's state.

- What is an uncontrolled component?
- It is a form element that maintains its own internal state.

- What is the purpose of the `key` prop when rendering a list of components?
- It helps React identify which items have changed, been added, or removed.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
- Using an array index as a key can lead to issues with component state and performance.

- Describe useEffect.  What use cases is it used for in React components?
- 'useEffect' is a hook that lets you perform side effects in functional components.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
- It creates a mutable object that persists across renders.

- When would you use a ref? When wouldn't you use one?
- You would use a ref to directly access a DOM element, store a mutable value that does not trigger a renderer when updated, and for integrating with third-party libraries that require direct DOM manipulation. You would not use a ref to manage state that affects rendering, as a substitute for state mnagaement or props, or when you can achieve the same result with controlled components or state.

- What is a custom hook in React? When would you want to write one?
- A custom hook is a reusable function that encapsulates common logic using React hooks.