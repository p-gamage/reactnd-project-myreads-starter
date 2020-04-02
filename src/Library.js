import React from 'react';
// import PropTypes from 'prop-types';
import Shelf from './Shelf';

const shelves = ['Currently Reading', 'Want to Read', 'Read'];

export default () => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        {shelves.map((shelf) => (
          <Shelf shelfName={shelf} />
        ))}
      </div>
    </div>
  </div>
);
