import './style/main/main.css';
import './style/menu/menu.css';
import './style/contact/contact.css';

import { renderMain } from './components/mainMenu';
import { renderMenu } from './components/menu';
import { renderContact } from './components/contact';


renderMain();
//renderMenu()
//renderContact();


const content = document.querySelector('#content');
content.addEventListener('click', (e) => {
    if (e.target.className == 'home') {
        content.innerHTML='';
        renderMain();
    } else if (e.target.className == 'menu') {
        content.innerHTML='';
        renderMenu();
    } else if (e.target.className == 'contact') {
        content.innerHTML='';
        renderContact();
    }

    console.log(e.target.className)
})

console.log('this is a test')
