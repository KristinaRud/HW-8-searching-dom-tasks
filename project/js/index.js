'use strict'

//1) Знайти всі параграфи на сторінці та встановити колір фону #ff0000

let paragraps = document.querySelectorAll('p');
paragraps.forEach(p => p.style.backgroundColor = "#ff0000");

//2) Знайти елемент із id="optionsList". Вивести у консоль. Знайти батьківський елемент та вивести в консоль. Знайти дочірні ноди, якщо вони є, і вивести в консоль назви та тип нод.

let elem = document.querySelector('#optionsList');
console.log(elem);
console.log(elem.parentElement);

if (elem.hasChildNodes) {
    let children = elem.childNodes;
    children.forEach(child => console.log(`Name: ${child.nodeName}; Type: ${child.nodeType}`));
}

//3) Встановіть в якості контента елемента з класом testParagraph наступний параграф - <p>This is a paragraph<p/>

let testParagraph = document.querySelector('#testParagraph');
testParagraph.innerHTML = "<p>This is a paragraph<p/>";

//4) Отримати елементи <li>, вкладені в елемент із класом main-header і вивести їх у консоль. Кожному з елементів присвоїти новий клас nav-item.

let list = document.querySelectorAll('.main-header li');
list.forEach(li => {
    li.classList.add('nav-item');
    console.log(li);
});

//5) Знайти всі елементи із класом section-title. Видалити цей клас у цих елементів.
let listSecTitle = document.querySelectorAll('.section-title');
listSecTitle.forEach(el => el.classList.remove('section-title'));
