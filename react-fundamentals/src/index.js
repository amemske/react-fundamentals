import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import { data } from './books';
import Book from './Book';

function BookList() {
  return (
    <div className='grid-4'>
      {data.map((singleBook) => {
        // const { img, title, make } = singleBook;
        //spread the properties using the spread operator
        return <Book key={singleBook.id} {...singleBook}></Book>;
      })}
    </div>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));
