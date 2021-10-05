import React, { Component } from "react";
import { toast } from "react-toastify";
export default class SearchBar extends Component {
  state = { searchQuery: "" };
  handleQueryChange = (event) => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.searchQuery.trim() === "") {
      toast("строка поиска пустая");
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: "" });
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm">
          <button
            type="submit"
            className="SearchForm-button"
            onClick={this.handleSubmit}
          >
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleQueryChange}
          />
        </form>
      </header>
    );
  }
}
