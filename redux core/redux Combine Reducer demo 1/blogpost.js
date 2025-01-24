const { createStore, combineReducers } = require("redux");

// define initialState

const postInitialState = {
  posts: [],
};

const userInitialState = {
  users: [],
};

// Define Post Action Creators

const createPostAction = (post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};

const removePostAction = (id) => {
  return {
    type: "REMOVE_POST",
    payload: id,
  };
};

// Define User Action Creators

const createUserAction = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

const removeUserAction = (id) => {
  return {
    type: "REMOVE_USER",
    payload: id,
  };
};

// Define Post Reducer

const postReducer = (state = postInitialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        posts: [...state.posts, action.payload],
      };
    case "REMOVE_POST":
      let postArr = state.posts.filter((post) => post.id !== action.payload);
      return {
        posts: postArr,
      };
    default:
      return state;
  }
};

// Define Post Reducer

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        users: [...state.users, action.payload],
      };
    case "REMOVE_USER":
      let userArr = state.users.filter((user) => user.id !== action.payload);
      return {
        users: userArr,
      };
    default:
      return state;
  }
};
//Combine Reducer
const rootReducer = combineReducers({
  postRed: postReducer,
  userRed: userReducer,
});

// Create Store object
const store = createStore(rootReducer);

//Define subscriber

store.subscribe(() => {
  const state = store.getState();
  console.log("store accessed:", state);
  console.log(state.postRed);
  console.log(state.userRed);
});
store.dispatch(createPostAction({ id: 101, title: "React Hooks" }));
store.dispatch(createUserAction({ id: 201, name: "Arpit" }));
store.dispatch(createUserAction({ id: 202, name: "Sachin" }));
store.dispatch(removeUserAction(201));
