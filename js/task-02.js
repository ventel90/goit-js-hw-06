// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.
// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];
// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

'use strict';
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ulEl = document.getElementById('ingredients');
// const foodIngredients = ingredients.forEach(ingredient => {
//   const items = document.createElement('li');
//   items.innerHTML = ingredient;
//   ulEl.append(items);
//   parent.append(...items);
// });
// console.log(foodIngredients);

const ulEl = document.querySelector('#ingredients');
ingredients.map(elem => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = elem;
  ulEl.append(itemEl);
});
