import React from 'react';
import ReactDOM from 'react-dom';
import FlashCard from './js/components/flashCard';

let container = document.getElementById('content');
console.log(container);
let cards = [ 'one', 'two', 'three', 'four' ];
ReactDOM.render(<FlashCard cards={cards} />, container);
