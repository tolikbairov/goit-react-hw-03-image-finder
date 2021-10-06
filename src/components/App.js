import React, { Component } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
// import ContactForm from "./contact-form/contact-form";
// import ContactList from "./contact-list/contact-list";
class App extends Component {
  state = { searchQuery: "" };
  handleFormSubmit = (searchQuery) => {
    this.setState({ searchQuery });
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchQuery={this.state.searchQuery} />
        <ToastContainer autoClose={3500} />
      </div>
    );
  }
}
export default App;
