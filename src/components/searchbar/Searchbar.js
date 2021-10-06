import React, { Component } from "react";
import { toast } from "react-toastify";
import style from "./Searchbar.module.css";
import PropTypes from "prop-types";
export default class Searchbar extends Component {
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
      <header className={style.Searchbar}>
        <form className={style.SearchForm}>
          <button
            type="submit"
            className={style["SearchForm-button"]}
            onClick={this.handleSubmit}
          >
            <span className={style["SearchForm-button-label"]}>Search</span>
          </button>

          <input
            className={style["SearchForm-input"]}
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
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
