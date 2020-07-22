const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  }
}

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  }
}

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  }
}

export const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  }
}

export const bookRemovedFromCart = (bookId) => {
  return {
    type: 'BOOK_REMOVED_FROM_CART',
    payload: bookId
  }
}

export const allBooksRemovedFromCart = (bookId) => {
  return {
    type: 'ALL_BOOKS_REMOVED_FROM_CART',
    payload: bookId
  }
}

export function fetchBooks() {
  return async dispatch => {
    dispatch(booksRequested())
    await fetch('/api/books')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw(res.error)
        }
        // console.log(res)
        dispatch(booksLoaded(res))
        return res
      })
      .catch(error => {
        dispatch(booksError(error));
      })
  }
}
