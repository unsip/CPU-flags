import CpuFlags               from './CpuFlags';
import { FLAGS }              from 'constants';
import React                  from 'react';
import ReactDOM               from 'react-dom';
import registerServiceWorker  from './registerServiceWorker';

import './index.css';


ReactDOM.render(<CpuFlags flags={FLAGS} />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
    module.hot.accept()
};
