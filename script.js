const newDiv = document.createElement('div');
const newH1 = document.createElement('h1');
const newP = document.createElement('p');

newH1.innerText = 'John Doe';
newP.innerText = 'Welcome to my profile page.';

newDiv.appendChild(newH1);
newDiv.appendChild(newP);
document.body.appendChild(newDiv);

newDiv.style.backgroundColor = '#f0f0f0';
newDiv.style.padding = '20px';
newDiv.style.borderRadius = '10px';

newH1.style.color = '#ff5733';
newH1.style.fontSize = '2em';

newP.style.color = '#333';
newP.style.fontSize = '1em';
