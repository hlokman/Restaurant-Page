import menu1Img from '../style/menu/boeuf-bourguignon-cocotte-4.jpg';
import menu2Img from '../style/menu/Instant-Pot-Penne-with-Sausage-L.jpg';
import menu3Img from '../style/menu/les-10-desserts-preferes-des-fra.jpg';



const renderMenu = () => {
    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    content.appendChild(container);

     //the #header div with its content
     const header = document.createElement('div');
     header.setAttribute('id', 'header');
     container.appendChild(header);
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

     //the #menuContent div with its content
     const menuContent = document.createElement('div');
     menuContent.setAttribute('id', 'menuContent');
     container.appendChild(menuContent);

     //menu1
     const menu1 = document.createElement('div');
     menu1.setAttribute('class', 'menu1');
     menuContent.appendChild(menu1);
     const myIcon = new Image();
     myIcon.src = menu1Img;
     menu1.appendChild(myIcon);
     const h2One = document.createElement('h2');
     h2One.innerHTML='Menu <span style="color: rgb(255, 198, 43);">One</span>'
     /*const spanOne = document.createElement('span');
     spanOne.setAttribute('style', 'color: rgb(255, 198, 43)');
     spanOne.textContent='One';*/
     menu1.appendChild(h2One);
     //h2One.appendChild(spanOne);
     const ulOne = document.createElement('ul');
     menu1.appendChild(ulOne);
     const liOne1 = document.createElement('li');
     ulOne.appendChild(liOne1);
     const h3One1 = document.createElement('h3');
     h3One1.textContent='Lorem ipsum dolor sit amet, consectetur';
     liOne1.appendChild(h3One1);
     const spanOne1 = document.createElement('span');
     spanOne1.textContent='Proin suscipit risus et condimentum scelerisque. Phasellus a posuere urna. Pellentesque arcu justo, iaculis quis tortor eget, pellentesque gravida odio.In maximus viverra massa sed porta. Vestibulum hendrerit magna pretium tellus cursus.'
     liOne1.appendChild(spanOne1);
     //
     const liOne2 = document.createElement('li');
     ulOne.appendChild(liOne2);
     const h3One2 = document.createElement('h3');
     h3One2.textContent='Suspendisse eleifend lorem aliquam viverra semper';
     liOne2.appendChild(h3One2);
     const spanOne2 = document.createElement('span');
     spanOne2.textContent='Suspendisse placerat eget metus non fringilla. Integer et sagittis tortor. Proin nec felis eros. Vivamus nec nunc volutpat, varius odio sit amet, luctus urna.'
     liOne2.appendChild(spanOne2);
     //
     const liOne3 = document.createElement('li');
     ulOne.appendChild(liOne3);
     const h3One3 = document.createElement('h3');
     h3One3.textContent='Fusce consequat eros et justo vulputate, eget';
     liOne3.appendChild(h3One3);
     const spanOne3 = document.createElement('span');
     spanOne3.textContent='Curabitur at neque luctus, ultrices erat at, cursus felis. In tempus quam lacus, ut gravida leo rutrum vitae. Donec dictum elit ut quam rutrum, a tincidunt leo semper.'
     liOne3.appendChild(spanOne3);
     //
     const liOne4 = document.createElement('li');
     ulOne.appendChild(liOne4);
     const h3One4 = document.createElement('h3');
     h3One4.textContent='Quisque ut nulla pretium, commodo mi vel, condimentum sem';
     liOne4.appendChild(h3One4);
     const spanOne4 = document.createElement('span');
     spanOne4.textContent='Nunc in pretium arcu. Nullam eu odio dolor. Praesent dignissim dignissim ex quis egestas. Vivamus cursus bibendum cursus. Proin sodales vestibulum tincidunt.'
     liOne4.appendChild(spanOne4);
     //
     const liOne5 = document.createElement('li');
     ulOne.appendChild(liOne5);
     const h3One5 = document.createElement('h3');
     h3One5.textContent='Duis dictum lorem in sapien vulputate porttitor. Integer porttitor mi lectus';
     liOne5.appendChild(h3One5);
     const spanOne5 = document.createElement('span');
     spanOne5.textContent='pretium vehicula lorem. Curabitur ac tortor at dui sollicitudin finibus. Pellentesque tortor dolor, rutrum ac pellentesque quis, vehicula ac quam. Phasellus aliquet est vel urna porta pretium. ellentesque fermentum ante ultrices, pellentesque quam non, suscipit mauris. Nullam sodales fermentum turpis.'
     liOne5.appendChild(spanOne5);

     //menu2
     const menu2 = document.createElement('div');
     menu2.setAttribute('class', 'menu2');
     menuContent.appendChild(menu2);
     const h1Two = document.createElement('h1');
     h1Two.textContent='COMFY MENU';
     menu2.appendChild(h1Two);
     const myIcon2 = new Image();
     myIcon2.src = menu2Img;
     menu2.appendChild(myIcon2);
     const h2Two = document.createElement('h2');
     h2Two.innerHTML='Menu <span style="color: rgb(255, 198, 43);">Two</span>';
     /*const spanTwo = document.createElement('span');
     spanTwo.setAttribute('style', 'color: rgb(255, 198, 43)');
     spanTwo.textContent='Two';*/
     menu2.appendChild(h2Two);
     //h2Two.appendChild(spanTwo);
     const spanBottom = document.createElement('span');
     spanBottom.setAttribute('class', 'menu2Bottom');
     menu2.appendChild(spanBottom);
     const ulTwo = document.createElement('ul');
     spanBottom.appendChild(ulTwo);
     //
     const liTwo1 = document.createElement('li');
     ulTwo.appendChild(liTwo1);
     const h3Two1 = document.createElement('h3');
     h3Two1.textContent='Fusce ullamcorper laoreet turpis, semper facilisis massa malesuada ac';
     liTwo1.appendChild(h3Two1);
     const spanTwo1 = document.createElement('span');
     spanTwo1.textContent='Donec iaculis turpis ut leo luctus, ut placerat dui ullamcorper. Sed pretium sit amet quam vel bibendum. Integer accumsan quam sit amet dui euismod sollicitudin.'
     liTwo1.appendChild(spanTwo1);
     //
     const liTwo2 = document.createElement('li');
     ulTwo.appendChild(liTwo2);
     const h3Two2 = document.createElement('h3');
     h3Two2.textContent='Vestibulum tempus nisl sit amet sem venenatis';
     liTwo2.appendChild(h3Two2);
     const spanTwo2 = document.createElement('span');
     spanTwo2.textContent='Sed pretium sit amet quam vel bibendum. Integer accumsan quam sit amet dui euismod sollicitudin. Donec interdum tellus eget. Donec lobortis augue tellus.'
     liTwo2.appendChild(spanTwo2);
     //
     const liTwo3 = document.createElement('li');
     ulTwo.appendChild(liTwo3);
     const h3Two3 = document.createElement('h3');
     h3Two3.textContent='Praesent viverra at libero rutrum consequat. Nam';
     liTwo3.appendChild(h3Two3);
     const spanTwo3 = document.createElement('span');
     spanTwo3.textContent='Curabitur porttitor turpis congue felis viverra vestibulum. Orci varius natoque penatibus et magnis dis parturient montes.'
     liTwo3.appendChild(spanTwo3);
     //
     const liTwo4 = document.createElement('li');
     ulTwo.appendChild(liTwo4);
     const h3Two4 = document.createElement('h3');
     h3Two4.textContent='Fusce eu vehicula eros, a facilisis ligula id elit tempus tempor';
     liTwo4.appendChild(h3Two4);
     const spanTwo4 = document.createElement('span');
     spanTwo4.textContent='Ut ut nunc imperdiet, ultrices tellus eget, mattis leo. Vivamus sed cursus magna. Quisque sit amet nunc felis. Donec orci orci, fringilla id eros vitae, vulputate fermentum mauris.'
     liTwo4.appendChild(spanTwo4);

     //menu3
     const menu3 = document.createElement('div');
     menu3.setAttribute('class', 'menu3');
     menuContent.appendChild(menu3);
     const h2Three = document.createElement('h2');
     h2Three.innerHTML='Menu <span style="color: rgb(255, 198, 43);">Three</span>';
     /*const spanThree = document.createElement('span');
     spanThree.setAttribute('style', 'color: rgb(255, 198, 43)');
     spanThree.textContent='Three';*/
     menu3.appendChild(h2Three);
     //h2Three.appendChild(spanThree);
     const spanBottom2 = document.createElement('span');
     spanBottom2.setAttribute('class', 'menu3Bottom');
     menu3.appendChild(spanBottom2);
     const ulThree1 = document.createElement('ul');
     spanBottom2.appendChild(ulThree1);
     //
     const liThree1 = document.createElement('li');
     ulThree1.appendChild(liThree1);
     const h3Three1 = document.createElement('h3');
     h3Three1.textContent='Praesent viverra at libero rutrum consequat. Nam';
     liThree1.appendChild(h3Three1);
     const spanThree1 = document.createElement('span');
     spanThree1.textContent='Curabitur porttitor turpis congue felis viverra vestibulum. Orci varius natoque penatibus et magnis dis parturient montes.'
     liThree1.appendChild(spanThree1);
     //
     const liThree2 = document.createElement('li');
     ulThree1.appendChild(liThree2);
     const h3Three2 = document.createElement('h3');
     h3Three2.textContent='Fusce eu vehicula eros, a facilisis ligula id elit tempus tempor';
     liThree2.appendChild(h3Three2);
     const spanThree2 = document.createElement('span');
     spanThree2.textContent='Ut ut nunc imperdiet, ultrices tellus eget, mattis leo. Vivamus sed cursus magna. Quisque sit amet nunc felis. Donec orci orci, fringilla id eros vitae, vulputate fermentum mauris.'
     liThree2.appendChild(spanThree2);
     //menu3 Drinks
     const br = document.createElement('br');
     menu3.appendChild(br);
     const drinks = document.createElement('h2');
     drinks.textContent='Drinks & Desserts';
     menu3.appendChild(drinks);
     const spanBottom3 = document.createElement('span');
     spanBottom3.setAttribute('class', 'menu3Drinks');
     menu3.appendChild(spanBottom3);
     const ulThree2 = document.createElement('ul');
     spanBottom3.appendChild(ulThree2);
     //
     const liThree3 = document.createElement('li');
     ulThree2.appendChild(liThree3);
     const h3Three3 = document.createElement('h3');
     h3Three3.textContent='Quisque commodo';
     liThree3.appendChild(h3Three3);
     const spanThree3 = document.createElement('span');
     spanThree3.textContent='Pellentesque dignissim enim eu ornare.'
     liThree3.appendChild(spanThree3);
     //
     const liThree4 = document.createElement('li');
     ulThree2.appendChild(liThree4);
     const h3Three4 = document.createElement('h3');
     h3Three4.textContent='Nullam rutrum';
     liThree4.appendChild(h3Three4);
     const spanThree4 = document.createElement('span');
     spanThree4.textContent='dui commodo facilisis tincidunt.'
     liThree4.appendChild(spanThree4);
     //
     const liThree5 = document.createElement('li');
     ulThree2.appendChild(liThree5);
     const h3Three5 = document.createElement('h3');
     h3Three5.textContent='non gravida massa facilisis';
     liThree5.appendChild(h3Three5);
     const spanThree5 = document.createElement('span');
     spanThree5.textContent='Nullam odio dolor, rhoncus a tortor.'
     liThree5.appendChild(spanThree5);
     //
     const liThree6 = document.createElement('li');
     ulThree2.appendChild(liThree6);
     const h3Three6 = document.createElement('h3');
     h3Three6.textContent='Sed lobortis';
     liThree6.appendChild(h3Three6);
     const spanThree6 = document.createElement('span');
     spanThree6.textContent='Cras ac efficitur velit, vitae porttitor.'
     liThree6.appendChild(spanThree6);
     //
     const liThree7 = document.createElement('li');
     ulThree2.appendChild(liThree7);
     const h3Three7 = document.createElement('h3');
     h3Three7.textContent='ac porttitor quam';
     liThree7.appendChild(h3Three7);
     const spanThree7 = document.createElement('span');
     spanThree7.textContent='vitae porttitor sapien.'
     liThree7.appendChild(spanThree7);
     //
     const myIcon3 = new Image();
     myIcon3.src = menu3Img;
     menu3.appendChild(myIcon3);


    console.log('test renderMenu')
};

export {renderMenu};