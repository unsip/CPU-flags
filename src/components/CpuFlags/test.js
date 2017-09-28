import CpuFlags   from './index.js';
import { mount, shallow }  from 'enzyme';
import React      from 'react';
import ReactDOM   from 'react-dom';

describe("CpuFlags component", () => {
  const shallowRender = () =>
    shallow(<CpuFlags />);

  it('always renders without crashes', () => {
    const main = shallowRender().find('div');
    expect(main.length).toBe(1);
  });
});

// Contracts:
// - Main component should always render
// - Description rendering only if there is valid searchTerm
