import React, {Component} from 'react';
import './App.css';
import Library from './Library';
import Search from './Search';
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class BooksApp extends Component {
  state = {
    books: []
  };

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({books});
  }

  updateBook = async (bookToUpdate, newShelf) => {
    bookToUpdate.shelf = newShelf;
    await BooksAPI.update(bookToUpdate, newShelf);
  };

  updateShelf = async (bookId, newShelf) => {
    let bookToUpdate = this.state.books.find((book) => book.id === bookId);

    if (bookToUpdate) {
      this.updateBook(bookToUpdate, newShelf);
      this.setState({bookToUpdate});
    } else {
      bookToUpdate = await BooksAPI.get(bookId);
      this.updateBook(bookToUpdate, newShelf);
      this.setState((prevState) => ({books: prevState.books.concat(bookToUpdate)}));
    }
  };

  render() {
    return (
      <div className="app">
        <Route
          exact 
          path={'/'}
          render={() => <Library books={this.state.books} updateShelf={this.updateShelf} />}
        />
        <Route path={'/search'} render={() => <Search books={this.state.books} updateShelf={this.updateShelf} />} />
      </div>
    );
  }
}

export default BooksApp;
