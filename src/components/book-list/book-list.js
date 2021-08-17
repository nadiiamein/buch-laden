import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import {withBookstoreService} from '../hoc/index';
import {booksLoaded} from '../../action';
import { compose } from '../../utils';
import Spinner from '../spinner';
import './book-list.css';

class Booklist extends Component {

    componentDidMount() {
        //recive data
                //dispatch action to store

const {bookstoreService} = this.props;
bookstoreService.getBooks()
.then((data) => {
    this.props.booksLoaded(data);

});
    }
    render() {
        const { books, loading} = this.props;

        if (loading) {
            return <Spinner/>;
        }
        return (
            <ul>
{
    books.map((book) => {
        return (
            <li key={book.id}><BookListItem book={book}/></li>
        )
    })
}
            </ul>
        );
        

    }
}
const mapStateToProps = ({books, loading}) => {
    return {books, loading};

}
const mapDispatchToProps = {
    booksLoaded
    };

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps))(Booklist);
