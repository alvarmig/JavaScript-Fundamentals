// Single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

// Multiple element
console.log(document.querySelectorAll('.item')); // Use this one
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');

// Here is the same function in two formats
items.forEach(item => console.log(item));

items.forEach(function(item) {
  console.log(item);
});

const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';
//mouseout mouseover
btn.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('click');
  document.querySelector('#my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');

  document.querySelector('.items').lastElementChild.innerHTML =
    '<h1> Hellow World</h2>';
});
