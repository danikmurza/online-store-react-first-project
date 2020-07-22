import updateBookList from './book-list'
import updateShoppingCart from './shopping-cart'
import newsList from "./newsList"
import {authentication} from "./authentication.reducer";

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action),
    newsList: newsList(state, action),
    authentication: authentication(state, action)
  }
}

export default reducer
