//  a reducer takes in:
// 1. action (info about what happened)
// 2. copy of current state

const comments = (state = [], action) => {
  console.log(state, action);
  return state;
}

export default comments;