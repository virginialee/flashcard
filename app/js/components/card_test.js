import React from 'react';
import { mount, shallow } from 'enzyme';
import expect from 'expect';

import Card from './card';

describe('Card', () => {
  let card = shallow(<Card cardContent='unforgettable'/>);

  it('should have content', () => {
    expect(card.text()).toEqual('unforgettable');
  });
});
