import buildHome from './home.js';
import buildNav from './nav.js';
import buildMenu from './menu.js';
import buildContact from './contact.js';

function display() {
    buildNav()
    buildHome()
    buildContact()

    const navItems = document.querySelectorAll('.item')

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const elements = document.querySelector('.elements')
        elements.remove()

        if(item.id == 'menu'){
          buildMenu()
        } else {
          buildHome()
        }
      })
    });
  }

display()
