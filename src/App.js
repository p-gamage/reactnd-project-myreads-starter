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

  updateShelf = async (bookId, newShelf) => {
    let bookToUpdate = this.state.books.find((book) => book.id === bookId);

    bookToUpdate = bookToUpdate ? bookToUpdate : await BooksAPI.get(bookId);
    bookToUpdate.shelf = newShelf;

    BooksAPI.update(bookToUpdate, newShelf);

    this.setState({bookToUpdate});
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path={'/'}
          render={() => <Library books={this.state.books} updateShelf={this.updateShelf} />}
        />
        <Route path={'/search'} render={() => <Search updateShelf={this.updateShelf} />} />
      </div>
    );
  }
}

export default BooksApp;
