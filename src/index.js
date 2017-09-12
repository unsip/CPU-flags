import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CFlags from './cflags';
import registerServiceWorker from './registerServiceWorker';

const FLAGS = [{ "mmx": "Multimedia Extensions" },
               { "fdiv": "FPU FDIV" },
               { "coma": "Cyrix 6x86 coma" },
               { "msr": "Model-Specific Registers" }
];

ReactDOM.render(<CFlags flags={FLAGS} />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
    module.hot.accept()
}
