//schicken fragen ob die data becommem kann
const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUESTED'
    }
};

//becommen data == ja
const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};

// becommen data == nein,error

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

const fetchBooks = (bookstoreService, dispatch) => () => {
    //recive data
       //dispatch action to store
  dispatch(booksRequested());
   bookstoreService.getBooks()
   .then((data) => dispatch(booksLoaded(data)))
   .catch((err) => dispatch(booksError(err)));
}
//thunk
// const fetchBooks = (bookstoreService) => () => (dispatch) =< {
//     dispatch(booksRequested());
//    bookstoreService.getBooks()
//    .then((data) => dispatch(booksLoaded(data)))
//    .catch((err) => dispatch(booksError(err)));
// };

export {
    fetchBooks

};