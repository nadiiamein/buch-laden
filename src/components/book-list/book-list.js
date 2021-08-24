import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import {withBookstoreService} from '../hoc/index';
import {fetchBooks, bookAddedToCart} from '../../action';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './book-list.css';

const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className="book-list">
{
books.map((book) => {
    return (
        <li key={book.id}>
            <BookListItem 
            book={book}
            onAddedToCart={() => onAddedToCart(book.id)}/></li>
    )
})
}
        </ul>
    );
    

};

class BooklistContainer extends Component {
    

    componentDidMount() {
this.props.fetchBooks();
    }
   render() {
        const { books, loading, error, onAddedToCart } = this.props;

        if (loading) {
            return <Spinner/>;
        }
        if (error){
            return <ErrorIndicator/>;
        }

        return <BookList books={books} onAddedToCart={onAddedToCart}/>;


    }
}

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error};

};
const mapDispatchToProps =(dispatch, {bookstoreService}) => {
    
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
         
    };
    
    };

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps))(BooklistContainer);
