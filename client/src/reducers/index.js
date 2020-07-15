import updateBookList from './book-list';
import updateShoppingCart from './shopping-cart';
import newsList from "./newsList";
import userList from './user'
const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action),
    newsList: newsList(state, action),
    userList: userList(state, action)
  };
};

export default reducer;
