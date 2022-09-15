const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const redpara = document.createElement('p');
redpara.classList.add('redpara');
redpara.textContent = 'Hey I’m red!';
redpara.style.color = 'red';

const bluehead = document.createElement('h3');
bluehead.classList.add('bluehead');
bluehead.textContent = 'I’m a blue h3!';
bluehead.style.color = 'blue';

const cont = document.createElement('div')
cont.classList.add('cont');
cont.style.cssText = 'border-style: solid; border-color: black; background: pink';

const divh = document.createElement('h1');
divh.classList.add('divh');
divh.textContent = 'I’m in a div';

const para = document.createElement('p');
para.classList.add('para');
para.textContent = 'ME TOO!';

container.appendChild(content);
container.appendChild(redpara);
container.appendChild(bluehead);
cont.appendChild(divh);
cont.appendChild(para);
container.appendChild(cont);
