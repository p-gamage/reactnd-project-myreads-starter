import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MoveBook extends Component {
  state = {
    shelf: this.props.currentShelf
  };

  handleOnChange = (event) => {
    const newShelf = event.target.value;
    this.setState({shelf: newShelf});
    this.props.moveShelf(newShelf);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleOnChange} value={this.state.shelf}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          {/*<option value="none">None</option>*/}
        </select>
      </div>
    );
  }
}

MoveBook.propTypes = {
  moveShelf: PropTypes.func.isRequired,
  currentShelf: PropTypes.string.isRequired
};

export default MoveBook;
