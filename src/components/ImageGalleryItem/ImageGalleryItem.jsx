import PropTypes from 'prop-types';

import s from '../ImageGallery/ImageGallery.module.css';

const ImageGalleryItem = ({ smallImage, largeImage, onClick }) => {
  return (
    <li
      onClick={() => {
        onClick(largeImage);
      }}
    >
      <img
        src={smallImage}
        alt="gallaryImg"
        className={s.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
