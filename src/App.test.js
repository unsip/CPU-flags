import React from 'react';
import ReactDOM from 'react-dom';
import CFlags from './cflags';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CFlags />, div);
});
