import buildPage from './print.js';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = 'Hello Webpack';
  
    return element;
  }

  buildPage()

  // document.body.appendChild(component());
