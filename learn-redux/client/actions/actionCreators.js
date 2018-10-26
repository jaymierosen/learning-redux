export const ACTIONS = {
  INCREMENT_LIKES: 'INCREMENT_LIKES',
  DECREMENT_LIKES: 'DECREMENT_LIKES',
  ADD_COMMENT: 'ADD_COMMENT',
  REMOVE_COMMENT: 'REMOVE_COMMENT'
};

// increment the likes
export const increment = (payload) => ({
  type: ACTIONS.INCREMENT_LIKES,
  payload
})

// decrement the likes
export const decrement = (payload) => ({
  type: ACTIONS.DECREMENT_LIKES,
  payload
})

// add comment
export const addComment = (postId, author, comment) => ({
  type: ACTIONS.ADD_COMMENT,
  postId, author, comment
})

// remove comment
export const removeComment = (postId, index) => ({
  type: ACTIONS.REMOVE_COMMENT,
  postId, index
})

// changing of route -- react router redux