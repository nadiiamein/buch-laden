import React from 'react';
import Booklist from '../book-list';

const HomePage = () => {
    const books = [
        {
            id: 1,
            title: 'JScript',
            author: 'jJson'
        },
        {
          id: 2,
          title: 'React',
          author: 'ReRan'
      }

      ];
    return (
    <Booklist books={books} />
        );
};
export default HomePage;