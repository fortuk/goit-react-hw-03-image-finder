import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from '../SearchBar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { fetchImagesWithQuery } from '../../api/imagesApi';
import Button from '../Button/Button';
import Loader from 'react-loader-spinner';
import Modal from '../Modal/Modal';
import s from './App.module.css';
import { toast } from 'react-toastify';
import { Load } from '../loader/loader';

function scrollPageDown() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
}

export default class App extends Component {
  state = {
    showModal: false,
    images: [],
    searchRequest: '',
    loading: false,
    error: '',
    page: 1,
    largeImageSrc: '',
    alt: '',
  };

  componentDidMount() {
    this.getData(this.state.searchRequest, this.state.page);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchRequest !== this.state.searchRequest) {
      this.setState({ images: [] });
    }
  }

  getData = (request, page) => {
    fetchImagesWithQuery(request, page)
      .then(response => {
        if (response.status === 200 && this.state.searchRequest.trim().length) {
          this.setState({
            images: [...this.state.images, ...response.data.hits],
          });

          if (this.state.images.length === 0) {
            toast.error('По вашему запросу - НИЧЕГО НЕ НАЙДЕНО!');
          }
          scrollPageDown();
        }
        if (response.status === 404) {
          throw new Error(response.message || 'pictures not exist');
        }
      })
      .catch(function (error) {
        console.error('error', error);
      })
      .then(() => {
        this.setState({ loading: false });
      });
  };

  handleSearchbarSubmit = request => {
    this.setState({ loading: true });
    this.setState({ searchRequest: request });
    this.getData(request, this.state.page);
  };
  fetchImages = () => {
    this.setState({ page: this.state.page + 1 });
    this.getData(this.state.searchRequest, this.state.page + 1);
    this.setState({ loading: true });

    return;
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  setCurrentPictureSrc = e => {
    this.setState({ showModal: !this.state.showModal });
    if (e !== undefined) {
      this.setState({ largeImageSrc: e.target.dataset.largeimage });
      this.setState({ alt: e.target.alt });
    }
  };

  render() {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />

        {this.state.images.length !== 0 && (
          <ImageGallery
            toggleModal={this.setCurrentPictureSrc}
            images={this.state.images}
          />
        )}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <div>
              <img src={this.state.largeImageSrc} alt={this.state.alt} />
            </div>
          </Modal>
        )}
        {this.state.loading && <Load />}
        {this.state.images.length > 0 && (
          <div className={'container'}>
            <Button onClick={this.fetchImages} />
          </div>
        )}
      </div>
    );
  }
}
