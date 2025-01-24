const { createStore, applyMiddleware } = require("redux");
const thunkMiddleware = require("redux-thunk").thunk;
//initial state
// initial State
// step : 1
const postInitialState = {
  posts: [],
  error: "",
  loading: false,
};

// Define Action Creators

const fetchPostRequestAction = () => {
  return {
    type: "REQUEST_STARTED",
  };
};

const fetchPostSuccessAction = (posts) => {
  return {
    type: "REQUEST_SUCCESSFUL",
    payload: posts,
  };
};

const fetchPostErrorAction = (errorMessage) => {
  return {
    type: "REQUEST_ERROR",
    payload: errorMessage,
  };
};

// Define Thunk Creator

const fetchPost = () => {
  return async (dispatch) => {
    // api call
    // resp rec
    // error handle
    dispatch(fetchPostRequestAction());
    try {
      const response = await fetch("http://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      let action = fetchPostSuccessAction(data);
      dispatch(action);
    } catch (error) {
      dispatch(fetchPostErrorAction(error.message));
    }
  };
};

//Define Reducer
const postReducer = (state = postInitialState, action) => {
  switch (action.type) {
    case "REQUEST_STARTED":
      return {
        ...state,
        loading: true,
      };
    case "REQUEST_SUCCESSFUL":
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case "REQUEST_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(postReducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  const state = store.getState();
  console.log("state accessed", state);
});

store.dispatch(fetchPost());
