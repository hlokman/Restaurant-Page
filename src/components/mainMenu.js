import twitterImg from '../style/main/icons8-twitter.svg';
import instaImg from '../style/main/icons8-instagram.svg';
import fbImg from '../style/main/icons8-facebook.svg';
import mapImg from '../style/main/237000142.png';

const renderMain = (() => {
    const content = document.querySelector('#content');

    //Create the top part div
    const top = document.createElement('div');
    top.setAttribute('id', 'top');
    content.appendChild(top);
    //fill up the top div
    //the #header div with its content
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    top.appendChild(header);
    const homeBtn = document.createElement('button');
    homeBtn.setAttribute('class', 'home');
    homeBtn.textContent='Home';
    const menuBtn = document.createElement('button');
    menuBtn.setAttribute('class', 'menu');
    menuBtn.textContent='Menu';
    const contactBtn = document.createElement('button');
    contactBtn.setAttribute('class', 'contact');
    contactBtn.textContent='Contact';
    header.appendChild(homeBtn);
    header.appendChild(menuBtn);
    header.appendChild(contactBtn);
    //the #main div and its content
    const main = document.createElement('div');
    main.setAttribute('id', 'main');
    top.appendChild(main);
    const left = document.createElement('div');
    left.setAttribute('class', 'left');
    main.appendChild(left);
    const quote = document.createElement('div');
    quote.setAttribute('class', 'quote');
    quote.textContent = '"The Greatest of all time"';
    const ref = document.createElement('div');
    ref.setAttribute('class', 'ref');
    ref.textContent= "-Gino D'Acampo";
    left.appendChild(quote);
    left.appendChild(ref);
    const right = document.createElement('div');
    right.setAttribute('class', 'right');
    main.appendChild(right);
    const name = document.createElement('h1');
    name.setAttribute('class', 'name');
    name.textContent="The Comfy Restaurant";
    const description = document.createElement('span');
    description.setAttribute('class', 'description');
    description.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac iaculis mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In imperdiet pulvinar tortor, eget molestie ipsum. Duis mollis pellentesque congue. Nam vel tristique justo. Aliquam at eros lacinia nisl sollicitudin commodo ut et ipsum. Aliquam euismod ligula ut ex iaculis blandit.';
    right.appendChild(name);
    right.appendChild(description);
    //the #footer and its content
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    top.appendChild(footer);
    const follow = document.createElement('h3');
    follow.textContent='Follow Us on';
    footer.appendChild(follow);
    const twitter = document.createElement('button');
    twitter.setAttribute('class', 'socialMedia');
    const insta = document.createElement('button');
    insta.setAttribute('class', 'socialMedia');
    const fb = document.createElement('button');
    fb.setAttribute('class', 'socialMedia');
    footer.appendChild(twitter);
    footer.appendChild(insta);
    footer.appendChild(fb);
    const myIcon = new Image();
    myIcon.setAttribute('class','socialMedia');
    myIcon.src = twitterImg;
    twitter.appendChild(myIcon);
    const myIcon2 = new Image();
    myIcon2.setAttribute('class','socialMedia');
    myIcon2.src = instaImg;
    insta.appendChild(myIcon2);
    const myIcon3 = new Image();
    myIcon3.setAttribute('class','socialMedia');
    myIcon3.src = fbImg;
    fb.appendChild(myIcon3);

    //Create the bottom part div
    const bottom = document.createElement('div');
    bottom.setAttribute('id', 'bottom');
    content.appendChild(bottom);
    //fill up the bottom div
    //the .map and its content
    const map = document.createElement('div');
    map.setAttribute('class', 'map');
    bottom.appendChild(map);
    const mapIcon = new Image();
    mapIcon.setAttribute('class', 'mapImg');
    mapIcon.src = mapImg;
    map.appendChild(mapIcon);
    const location = document.createElement('span');
    location.textContent='36ter Rue Simonis, 67100 Strasbourg';
    map.appendChild(location);
    //the .info and its content
    const info = document.createElement('div');
    info.setAttribute('class', 'info');
    bottom.appendChild(info);
    const hour = document.createElement('h1');
    hour.textContent='HOURS:';
    info.appendChild(hour);
    const ul = document.createElement('ul');
    info.appendChild(ul);
    const li1 = document.createElement('li');
    li1.textContent='Monday: 9am-11pm';
    ul.appendChild(li1);
    const li2 = document.createElement('li');
    li2.textContent='Tuesday: 9am-11pm';
    ul.appendChild(li2);
    const li3 = document.createElement('li');
    li3.textContent='Wednesday: 10am-11pm';
    ul.appendChild(li3);
    const li4 = document.createElement('li');
    li4.textContent='Thursday: 10am-11pm';
    ul.appendChild(li4);
    const li5 = document.createElement('li');
    li5.textContent='Friday: 8am-12am';
    ul.appendChild(li5);
    const li6 = document.createElement('li');
    li6.textContent='Saturday: 8am-12am';
    ul.appendChild(li6);
    const li7 = document.createElement('li');
    li7.setAttribute('style','color: rgb(161, 0, 0)');
    li7.textContent='Sunday: CLOSED';
    ul.appendChild(li7);
})();

export {renderMain};

