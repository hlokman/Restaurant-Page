import contactImg from '../style/contact/cozy-and-comfy-restaurant-ideas.jpg'

const renderContact = ()=> {
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

    //the #contactInfos and its content
    const contactInfos = document.createElement('div');
    contactInfos.setAttribute('id','contactInfos');
    container.appendChild(contactInfos);

    //leftContact
    const leftContact = document.createElement('div');
    leftContact.setAttribute('class', 'leftContact');
    contactInfos.appendChild(leftContact);
    const myIcon = new Image();
    myIcon.src = contactImg;
    leftContact.appendChild(myIcon);
    const num = document.createElement('p');
    num.setAttribute('class', 'num');
    num.innerHTML='<span>num:</span>123-456-7890';
    leftContact.appendChild(num);
    const mail = document.createElement('p');
    num.setAttribute('class', 'mail');
    mail.innerHTML='<span>email:</span>comfyrestaurant@xyz.com';
    leftContact.appendChild(mail);

    //rightContact
    const rightContact = document.createElement('div');
    rightContact.setAttribute('class', 'rightContact');
    contactInfos.appendChild(rightContact);
    const h1 = document.createElement('h1');
    h1.textContent='Contact Us';
    rightContact.appendChild(h1);
    //form
    const formDiv = document.createElement('div');
    formDiv.setAttribute('class', 'form');
    rightContact.appendChild(formDiv);
    const form = document.createElement('form');
    form.setAttribute('action', '');
    form.setAttribute('method', 'post');
    form.setAttribute('id', 'form');
    formDiv.appendChild(form);
    const ul = document.createElement('ul');
    form.appendChild(ul);
    const li1 = document.createElement('li');
    ul.appendChild(li1);
    //names
    const names = document.createElement('div');
    names.setAttribute('class', 'names');
    li1.appendChild(names);
    //-first name
    const first_nameDiv = document.createElement('div');
    first_nameDiv.setAttribute('class', 'first_name');
    names.appendChild(first_nameDiv);
    first_nameDiv.innerHTML='<label for="first_name">Name:</label>' + '<input type="text" name="first_name" id="first_name" required>';
    //-last name
    const last_nameDiv = document.createElement('div');
    last_nameDiv.setAttribute('class', 'last_name');
    names.appendChild(last_nameDiv);
    last_nameDiv.innerHTML='<label for="last_name">Last Name:</label>' + '<input type="text" name="last_name" id="last_name" required>'
    //email
    const li2 = document.createElement('li');
    ul.appendChild(li2);
    li2.innerHTML='<label for="email">Email:</label>' + '<input type="email" name="email" id="email" required>';
    //message
    const li3 = document.createElement('li');
    ul.appendChild(li3);
    li3.innerHTML='<label for="message">Message:</label>' + '<textarea id="message" class="textarea" name="message" required></textarea>';
    //submit
    form.innerHTML += '<button type="submit" class="submitBtn">Submit</button>';



    //console.log('test renderContact');
};

export {renderContact}

