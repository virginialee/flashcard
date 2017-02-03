import React, { Component, PropTypes } from 'react';
import styles from './card.css';

class Card extends Component {
  render() {
    let { cardContent } = this.props;

    return (
      <div className={styles.card}>
        { cardContent }
      </div>
    );
  }
}

Card.propTypes = {
  cardContent: PropTypes.string
};

export default Card;
