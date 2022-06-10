import PropTypes from 'prop-types';

import s from '../ImageGallery/ImageGallery.module.css';

const ImageGalleryItem = ({ src, tags, dataSrc, onClick }) => {
  return (
    <li onClick={onClick}>
      <img
        src={src}
        data-src={dataSrc}
        alt={tags}
        className={s.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  dataSrc: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
