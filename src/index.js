import ReactDOM from 'react-dom';

import './style/reset.less';
import './style/main.less';

import registerServiceWorker from './registerServiceWorker';
import router from './router/index';
  
ReactDOM.render(router, document.getElementById("app"))
registerServiceWorker();
