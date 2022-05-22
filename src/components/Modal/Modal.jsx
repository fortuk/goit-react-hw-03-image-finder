import PropTypes from 'prop-types';
import { Component } from 'react';

import './Modal.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscPress);
  }

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.modalClose();
    }
  };

  onEscPress = e => {
    if (e.code === 'Escape') {
      this.props.modalClose();
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={this.props.bigPhoto} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
};

export default Modal;
