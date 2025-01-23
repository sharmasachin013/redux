const { createStore } = require("redux");

// define initialState

const initialState = {
  posts: [],
};

// Define Action Creators

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

// Define Reducer

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        posts: [...state.posts, action.payload],
      };
    case "REMOVE_POST":
      let postArr = state.posts.filter((post) => post.id !== action.payload);
      return {
        post: postArr,
      };
    default:
      return state;
  }
};

// Create Store object
const store = createStore(postReducer);

//Define subscriber

store.subscribe(() => {
  const state = store.getState();
  console.log("store accessed:", state);
});
store.dispatch(createPostAction({ id: 101, title: "React Hooks" }));
store.dispatch(createPostAction({ id: 102, title: "Redux" }));
store.dispatch(removePostAction(101));
