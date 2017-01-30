import React from 'react';
import Counter from './counter';
import { mount } from 'enzyme';
import { expect } from 'chai';

describe('Counnter', () => {
  describe('components', () => {
    describe('Counter', () => {
      it('should render', () => {
        const text = 'text';
        const counter = 5;
        const suffix = '';
        const wrapper = mount(<Counter
          counter={counter}
          text={text}
          suffix={suffix}
        />);
        const component = wrapper.find(Counter);
        expect(component.props())
          .to
          .be
          .eql({
            text,
            counter,
            suffix,
          });
      });
    });
  });
});

export default Counter;
