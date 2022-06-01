import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from '../SearchBar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import imagesApi from '../../api/imagesApi';
import Button from '../Button/Button';
import Loader from 'react-loader-spinner';
import Modal from '../Modal/Modal';
import s from './App.module.css';

export default class App extends React.Component {
  state = {
    searchQuery: '',
    page: 1,
    results: [],
    loading: false,
    modalImage: null,
    firstFetch: true,
  };

  handleSearchbarSubmit = query => {
    this.setState({
      searchQuery: query,
      results: [],
      page: 1,
      firstFetch: true,
    });
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    prevQuery !== nextQuery && this.fetchImages();
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({
      loading: true,
    });

    imagesApi
      .fetchImagesWithQuery(searchQuery, page)
      .then(images => {
        if (images.length < 1) {
          this.setState({ error: true });
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
            page: prevState.page + 1,
            error: false,
          }));
          if (page !== 1) {
            this.scrollToBottom();
          }
        }
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  openModal = imageUrl => {
    this.setState({ modalImage: imageUrl });
  };

  closeModal = e => {
    this.setState({ modalImage: null });
  };

  render() {
    const { results, loading, modalImage } = this.state;
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        <ImageGallery images={results} onClick={this.openModal} />
        {modalImage && (
          <Modal largeImage={modalImage} onClose={this.closeModal} />
        )}
        {loading && (
          <div className={s.Loader}>
            <Loader type="Oval" color="#00BFFF" height={100} width={100} />
          </div>
        )}
        {results.length > 0 && !loading && (
          <Button onClick={this.fetchImages} />
        )}
      </div>
    );
  }
}
