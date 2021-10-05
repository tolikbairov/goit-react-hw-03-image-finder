import React, { Component } from "react";
import Modal from "../../Modal/Modal";

class ImageGalleryItem extends Component {
  state = {
    modalImg: "",
    showModal: false,
  };
  toggleModal = (e) => {
    this.setState((prev) => ({
      showModal: !prev.showModal,
      largeImage: e.target.id || "",
    }));
  };

  render() {
    const { id, webformatURL, largeImageURL } = this.props.item;
    console.log(id);
    return (
      <>
        <li className="ImageGalleryItem">
          <img
            src={webformatURL}
            alt=""
            className="ImageGalleryItem-image"
            onClick={this.toggleModal}
            id={largeImageURL}
          />
        </li>

        {this.state.showModal && (
          <Modal onClose={this.toggleModal} image={this.state.largeImage} />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
