import { Component } from 'react';
import PropTypes from 'prop-types';
import Searchbar1 from '../Searchbar/Searchbar1.css';

class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleNameChange = e => {
    this.setState({ imageName: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.imageName.trim() === '') {
      alert('Enter what do You want');
      return;
    }
    this.props.handleFormSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm__button">
              <span className="SearchForm__button__label">Search</span>
            </button>

            <input
              name="imageName"
              value={this.state.imageName}
              className="SearchForm__input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleNameChange}
            />
          </form>
        </header>
      </>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Searchbar;
