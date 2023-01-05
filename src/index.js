import buildPage from './home.js';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = 'Hello Webpack';
  
    return element;
  }

  buildPage()

  // document.body.appendChild(component());
