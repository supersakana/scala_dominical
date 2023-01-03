import printMe from './print.js';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = 'Hello Webpack';
    printMe()
  
    return element;
  }

//   document.body.appendChild(component());
