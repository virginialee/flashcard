import React, { Component, PropTypes } from 'react';

class Button extends Component {
  render() {
    let { icon, clickHandler } = this.props;

    return (
      <button onClick={ clickHandler }>
        { icon }
      </button>
    );
  }
}

Button.propTypes = {
  icon: PropTypes.element,
  clickHandler: PropTypes.func,
};

export default Button;
