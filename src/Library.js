import React, {Component} from 'react';
import Shelf from './Shelf';
import * as BooksAPI from './BooksAPI';

const shelves = ['Currently Reading', 'Want to Read', 'Read'];

class Library extends Component {
  state = {
    books: []
  };

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({books});
  }

  formatShelfName = (name) => name.toLowerCase().replace(/\s/g, '');

  filterBooks = (books, currentShelf) =>
    books.filter((book) => this.formatShelfName(book.shelf) === this.formatShelfName(currentShelf));

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map((shelf) => (
              <Shelf
                key={this.formatShelfName(shelf)}
                shelfName={shelf}
                books={this.filterBooks(this.state.books, shelf)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Library;
