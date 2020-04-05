import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Search extends Component {
  state = {
    query: '',
    searchResult: []
  };

  searchApi = (query) => {
    BooksAPI.search(query).then((searchResult) => this.setState({searchResult}));
  };

  handleOnChange = (query) => {
    this.setState({query});
    !query ? this.setState({searchResult: []}) : this.searchApi(query);
  };

  render() {
    const {query, searchResult} = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to={'/'}>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(e) => this.handleOnChange(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {searchResult.error && `No results found for ${query}`}
          <ol className="books-grid">
            {searchResult.length > 0 &&
              searchResult.map((book) => (
                <Book key={book.id} book={book} handleMoveShelf={this.props.updateShelf} />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  updateShelf: PropTypes.func.isRequired
};

export default Search;
