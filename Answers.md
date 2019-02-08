1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

  map, filter, reduce and concat all return new objects/arrays to prevent side-effects.  Object.assign() will create a new object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  Reducers handle the logic and manipulation of data between our application and our store.  Actions tell the reducer what needs to happen.  The store is the global state for the applications.  It is the single source of truth because it as a single immutable object.  Any changes are added onto the store as a new object.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

  Application state is the global state of the app.  Multiple components have access the data in the Application state.  Component state is localized to that specific component and no other component is reliant on that component's state.

1.  What is middleware?

  Middleware is additional software that is included to intercept part of the process and redirect information through new functions.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  Redux-thunk is middleware that allows to use Redux asynchronously.  Our action creators can now handle HTTP requests and contain multiple action types as part of the promises.

1.  Which `react-redux` method links up our `components` with our `redux store`?

  The connect method links our components with our store.
