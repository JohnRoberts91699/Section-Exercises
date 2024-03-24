### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
- Using callbacks, promises, or async/await syntax

- What is a Promise?
- an object that represents the completion or failure of an asynchronous operation and the value that follows.

- What are the differences between an async function and a regular function?
- an async function returns a promise, while a regular function does not. You can also use the await function inside of an async function to pause the execution until the promise is resolved.

- What is the difference between Node.js and Express.js?
- Node.js is an environment that lets you run javascript outisde of a web browser. Express.js is a web framework for Node.js that makes building web applications easier.

- What is the error-first callback pattern?
- It is used to handle asynchronous operations. The first argument is reserved for an error object and the rest contain the result of the operation.

- What is middleware?
- Middleware are functions in Express.js that have access to the request and response objects in an HTTP request-response cycle. They can mody the objects, end the cycle, or call the next function in the stack.

- What does the `next` function do?
- It passes control to the next middleware function in the stack.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
- Making three separate asynchronous requests in a row using await could slow things down if the requests are independent. The whole code block could also be refactored to use Promise.all or Promise.allSettled to make the requests concurrently and improve the performance. The variable names could also be more descriptive to prevent any future confusion.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
