import React, { Component, PropTypes } from 'react';
import styles from './flashCard.css';
import IconRightChevron from '../../image/open-iconic/svg/chevron-right.svg';
import IconLeftChevron from '../../image/open-iconic/svg/chevron-left.svg';
import Card from './card.js';
import Button from './button.js';

class FlashCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
       currentIndex: 0,
    };

    this.previousCard = this.previousCard.bind(this);
    this.nextCard = this.nextCard.bind(this);
  }

  leftChevronIcon() {
    return (
      <IconLeftChevron width='14' height='14' />
    );
  }

  rightChevronIcon() {
    return (
      <IconRightChevron width='14' height='14' />
    );
  }

  cardLength() {
    return this.props.cards.length;
  }

  previousCard() {
    const prevIndex = (this.state.currentIndex == 0)
      ? this.cardLength() - 1
      : this.state.currentIndex - 1;
    this.setState({ currentIndex: prevIndex });
  }

  nextCard() {
    const nextIndex = (this.state.currentIndex + 1) % this.cardLength();
    this.setState({currentIndex: nextIndex });
  }

  renderCard() {
    let card = this.props.cards[this.state.currentIndex];
    return (
      <Card cardContent={ card } />
    );
  }

  render() {
    return (
      <div className={styles.cardContainer}>
        <Button icon={ this.leftChevronIcon() } clickHandler={ this.previousCard }/>
          { this.renderCard() }
        <Button icon={ this.rightChevronIcon() } clickHandler={ this.nextCard }/>
      </div>
    );
  }
}

FlashCard.propTypes = {
  cards: PropTypes.array
};

export default FlashCard;
