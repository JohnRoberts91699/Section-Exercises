### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
- React Router is a library for managing navigation and routing in React applications.

- What is a single page application?
- An SPA is a web application that loads a single HTML page and dynamically updates the content as the user interacts with the app.

- What are some differences between client side and server side routing?
- Client-Side Routing:
    -Managed by JavaScript in the browser.
    -Only part of the page is updated, resulting in faster navigation.
    -Provides a smoother user experience as the app does not reload the entire page.
    -Requires a single HTML file where JavaScript handles route changes.

-Server-Side Routing:
    -Managed by the server.
    -Each navigation request reloads the entire page.
    -Can be slower due to the need for full page reloads.
    -Each route corresponds to a different HTML file or template served by the server.

- What are two ways of handling redirects with React Router? When would you use each?
- You would use the Redirect method for conditional redirects within a component. You would use a `useHistory` hook for programmatically navigating within event handlers or functions where you need more control over navigation.

- What are two different ways to handle page-not-found user experiences using React Router?
- You can use a catch-all route and make the last route without a `path` match any URL that doesn't match the previous routes. Or you can use a specific 404 route by using `path="*"` which ensures that the NotFound component is rendered for any undefined routes. 

- How do you grab URL parameters from within a component using React Router?
- You can use the `useParams` hook.

- What is context in React? When would you use it?
- Context in React is a way to pass data through the component tree without having to pass props down manually at every level. You use it when you need to share state or data across multiple components that are not directly related.

- Describe some differences between class-based components and function
  components in React.
-Class-Based Components:
  -Defined using ES6 classes.
  -Use this.state and this.setState for managing state.
  -Lifecycle methods such as componentDidMount, componentDidUpdate, and componentWillUnmount are used to manage side effects.

-Function Components:
  -Defined using functions.
  -Use hooks (e.g., useState, useEffect) for managing state and side effects.
  -Generally shorter and simpler, with no this binding required.

- What are some of the problems that hooks were designed to solve?
- Code Reusability:
  -With hooks, logic can be reused between components without using higher-order components (HOCs) or render props.

-Complex Components:
  -Hooks help manage complex stateful logic in components without needing to split them into smaller components.

-Cleaner Code:
  -Hooks provide a way to manage state and lifecycle methods in function components, leading to cleaner and more readable code.

-Side Effects:
  -The useEffect hook simplifies the handling of side effects like data fetching, subscriptions, and manual DOM manipulations, making it easier to manage and avoid common pitfalls like memory leaks.