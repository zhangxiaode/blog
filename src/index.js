import React from 'react';
import ReactDOM from 'react-dom';

import './style/reset.less';
import './style/main.less';

import registerServiceWorker from './registerServiceWorker';
import App from './view/App';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
