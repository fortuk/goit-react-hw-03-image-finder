import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from '../SearchBar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import imagesApi from '../../api/imagesApi';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { Load } from '../loader/loader';
import s from '../App/App.module.css';

export default class App extends Component {
  state = {
    showModal: false,
    images: [],
    searchRequest: '',
    loading: false,
    error: null,
    page: 1,
    largeImageSrc: '',
    alt: '',
    status: 'idle',
    modalImg: '',
    modalAlt: '',
  };

  componentDidUpdate(_, prevState) {
    const prevQuery = prevState.searchRequest;
    const nextQuery = this.state.searchRequest;

    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (nextPage > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }

    if (prevQuery !== nextQuery) {
      this.setState({ images: [], status: 'pending' });
    }

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      imagesApi
        .fetchImagesWithQuery(nextQuery, nextPage)
        .then(({ hits }) => {
          const images = hits.map(
            ({ id, webformatURL, largeImageURL, tags }) => {
              return { id, webformatURL, largeImageURL, tags };
            },
          );
          if (images.length > 0) {
            this.setState(prevState => {
              return {
                images: [...prevState.images, ...images],
                status: 'resolved',
              };
            });
          } else {
            alert(`По запросу ${nextQuery} ничего не найдено.`);
            this.setState({ status: 'idle' });
          }
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  handleSearchbarSubmit = request => {
    if (request !== this.state.searchRequest) {
      this.setState({ searchRequest: request, page: 1, status: 'pending' });
    }
  };

  fetchImages = () => {
    this.setState(({ page }) => {
      return { page: page + 1, status: 'pending' };
    });

    return;
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  setCurrentPictureSrc = event => {
    const imgForModal = event.target.dataset.src;
    const altForModal = event.target.alt;
    this.setState({
      showModal: true,
      modalImg: imgForModal,
      modalAlt: altForModal,
    });
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
