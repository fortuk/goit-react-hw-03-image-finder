import PropTypes from 'prop-types';
import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import ImageGallery1 from './ImageGallery1.css';

class ImageGallery extends Component {
  state = {
    imageName: '',
    webformatURL: '',
    largeImageURL: '',
    id: '',
  };

  isOpen = e => {
    this.setState({ largeImageURL: e.target.getAttribute('alt') });
  };

  render() {
    const { hits, takeLargeImage } = this.props;
    return (
      <>
        <ul className="ImageGallery">
          {hits.map(({ webformatURL, largeImageURL, id }) => (
            <ImageGalleryItem
              smallPhoto={webformatURL}
              bigPhoto={largeImageURL}
              key={id}
              onClick={() => takeLargeImage(largeImageURL)}
            />
          ))}
        </ul>
      </>
    );
  }
}

ImageGallery.propTypes = {
  key: PropTypes.number,
  smallPhoto: PropTypes.string,
  bigPhoto: PropTypes.string,
};

export default ImageGallery;
