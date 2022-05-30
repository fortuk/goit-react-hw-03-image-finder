import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          smallImage={image.webformatURL}
          largeImage={image.largeImageURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
