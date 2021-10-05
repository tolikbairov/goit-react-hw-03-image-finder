import { Component } from "react";
import { getImages } from "../../services/pixabayApiService";
import LoaderSpiner from "../Loader/Loader";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

// import SearchBar from "./Searchbar";
export default class ImageGallery extends Component {
  state = {
    page: 1,
    isHidden: false,
    gallery: [],
    loading: false,
  };
  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;
    if (prevQuery !== nextQuery) {
      this.setState({ loading: true });
      const gallery = await getImages(this.props.searchQuery, 1);
      await this.setState((prev) => ({
        gallery,
        isHidden: true,
        page: prev.page + 1,
      }));
      this.setState({ loading: false });
    }
  }
  onLoadMoreBtnClick = async () => {
    this.setState({ loading: true });
    const gallery = await getImages(this.props.searchQuery, this.state.page);
    this.setState((prev) => ({
      gallery: [...prev.gallery, ...gallery],
      isHidden: true,
      page: prev.page + 1,
    }));
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  render() {
    return (
      <>
        {this.state.loading && <LoaderSpiner />}
        <ul className="ImageGallery">
          {this.state.gallery.map((item) => (
            <ImageGalleryItem item={item} key={item.id} />
          ))}
        </ul>
        {this.state.isHidden && (
          <button
            type="button"
            className="Button"
            onClick={this.onLoadMoreBtnClick}
          >
            Load more
          </button>
        )}
      </>
    );
  }
}
