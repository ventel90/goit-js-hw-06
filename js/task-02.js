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

// const ulEl = document.querySelector('ul#ingredients');
// ingredients.map(elem => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('item');
//   itemEl.textContent = elem;
//   ulEl.append(itemEl);
// });


const ulEl = document.querySelector('ul#ingredients');
const foodIngredients = arrayOfItems => {
  console.log(arrayOfItems);
  console.log(document.createElement('li'));
  ulEl.append(
    ...arrayOfItems.map(itemName => {
      const li = document.createElement('li');
      li.textContent = itemName;
      return li;
    }),
  );
};
foodIngredients(ingredients);