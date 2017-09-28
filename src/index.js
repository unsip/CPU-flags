import CpuFlags               from './components/CpuFlags';
import React                  from 'react';
import ReactDOM               from 'react-dom';
import registerServiceWorker  from './registerServiceWorker';

import './index.css';


ReactDOM.render(<CpuFlags />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
    module.hot.accept()
};
