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
        post: [...state.posts, action.payload],
      };
    case "REMOVE_POST":
      let postArr = state.post.filter((post) => post.id !== action.payload);
      return {
        post: postArr,
      };
    default:
      return state;
  }
};
