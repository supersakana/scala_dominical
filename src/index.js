import buildHome from './home.js';
import buildNav from './nav.js';
import buildMenu from './menu.js';

function display() {
    buildNav()
    buildHome()
    // buildMenu()

    const items = document.querySelectorAll('.item')
    items.forEach(item => {
      item.addEventListener('click', () => {
        console.log(item.id)
      })
    });
  }

display()
