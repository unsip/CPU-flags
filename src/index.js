import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CFlags from './cflags';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CFlags />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
    module.hot.accept()
}
