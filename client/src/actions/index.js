
const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  };
};

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  };
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  };
};

export const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  };
};

export const bookRemovedFromCart = (bookId) => {
  return {
    type: 'BOOK_REMOVED_FROM_CART',
    payload: bookId
  };
};

export const allBooksRemovedFromCart = (bookId) => {
  return {
    type: 'ALL_BOOKS_REMOVED_FROM_CART',
    payload: bookId
  };
};

export function fetchNewsPending() {
  return {
    type: 'FETCH_NEWS_REQUEST'
  }
}

export  function  fetchNewsSuccess(news) {
  return {
    type: 'FETCH_NEWS_SUCCESS',
    products: news
  }
}

export function fetchNewsError(error) {
  return {
    type: 'FETCH_NEWS_ERROR',
    products: error
  }
}

export function fetchUserPending() {
  return {
    type: 'FETCH_USER_REQUEST'
  }
}

export  function  fetchUserSuccess(user) {
  return {
    type: 'FETCH_USER_SUCCESS',
    products: user
  }
}

export function fetchUserError(error) {
  return {
    type: 'FETCH_USER_ERROR',
    products: error
  }
}

export function fetchBooks() {
  return async dispatch => {
    dispatch(booksRequested());
    await fetch('/api/books')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw(res.error);
        }
        console.log(res)
        dispatch(booksLoaded(res))
        return res;
      })
      .catch(error => {
        dispatch(booksError(error));
      })
  }
}

export function fetchNews() {
  return async dispatch => {
    dispatch(fetchNewsPending());
    await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=759652119d0a41f8acc1c5b07ad5263a')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw(res.error);
        }
        console.log(res)
        dispatch(fetchNewsSuccess(res.articles))
        return res;
      })
      .catch(error => {
        dispatch(fetchNewsError(error));
      })
  }
}



export function fetchUser() {
  return async dispatch => {
    dispatch(fetchUserPending());
    await fetch('/api/auth/array')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw(res.error);
        }
        console.log(res.message)
        dispatch(fetchUserSuccess(res))
        return res;
      })
      .catch(error => {
        dispatch(fetchUserError(error));
      })
  }
}







