
export default function userList(state, action) {
  
  if (state === undefined) {
    return {
      products: [],
      pending: true,
      error: null
    };
  }
  
  switch(action.type) {
    case 'FETCH_USER_REQUEST':
      return {
        products: [],
        pending: true,
        error: null
      }
    case 'FETCH_USER_SUCCESS':
      return {
        products: action.products,
        pending: false,
        error: null
      }
    case 'FETCH_USER_ERROR':
      return {
        products: [],
        pending: false,
        error: action.error
      }
    default:
      return state.userList;
  }
}
