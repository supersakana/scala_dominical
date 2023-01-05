import buildHome from './home.js';
import buildNav from './nav.js';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = 'Hello Webpack';
  
    return element;
  }

  buildNav()
  buildHome()
  // document.body.appendChild(component());
