import { eventShoppingBag } from '../shoppingBag/shoppingBag.js'
import * as loading from '../loading/loading.js'
import * as utils from '../utils.js'

function getItensToShopping() {
  try {
    setTimeout(() => {
      loading.display();
      fetch('./mocks/listHero.json')
        .then(response => {
          return response.json();
        })
        .then(data => {
          data.forEach((car, index) => {
            createShoppingItemComponent(car, index);
          });
          loading.hidden();
          utils.displayFilter();
          utils.displayFooter();
        });
    }, 400);
  } catch (error) {
    alert('Sorry, an error occurred. Please contact support.');
    console.log(error);
    return null;
  }
}

function createShoppingItemComponent(car, index) {
  try {
    fetch('components/shoppingItem/shoppingItem.html')
      .then(templateCar => templateCar.text())
      .then((templateCarText) => {
        const parser = new DOMParser();
        const htmlParsed = parser.parseFromString(templateCarText, 'text/html');

        htmlParsed.getElementById('item').id = `item${index}`;
        htmlParsed.querySelector('button').id = `button${index}`;
        htmlParsed.getElementById(`button${index}`).addEventListener('click', () => eventShoppingBag(index, car.price));
        htmlParsed.querySelector('.item-title').innerHTML = `${car.modelClass} ${car.version}`;
        htmlParsed.querySelector('.item-image').src = car.imagePath;
        htmlParsed.querySelector('.item-value').innerHTML = utils.formatPrice(car.price, car.price.amount);

        const template = htmlParsed.body.querySelector('section')
        if (template !== null) {
          document.querySelector('#shopping-itens').append(template);
        }

      });

  } catch (error) {
    alert('Sorry, an error occurred. Please contact support.');
    console.log(error);
    return null;
  }
}

export { getItensToShopping }
