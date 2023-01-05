import buildHome from './home.js';
import buildNav from './nav.js';
import buildMenu from './menu.js';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = 'Hello Webpack';
  
    return element;
  }

  buildNav()
  // buildHome()
  buildMenu()
  // document.body.appendChild(component());
