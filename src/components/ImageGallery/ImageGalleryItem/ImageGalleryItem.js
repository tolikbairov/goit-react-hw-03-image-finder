import React, { Component } from "react";
import Modal from "../../Modal/Modal";
import styles from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";
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
    const { webformatURL, largeImageURL } = this.props.item;

    return (
      <>
        <li className={styles.ImageGalleryItem}>
          <img
            src={webformatURL}
            alt=""
            className={styles["ImageGalleryItem-image"]}
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
ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
  }),
};
