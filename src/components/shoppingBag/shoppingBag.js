import * as utils from '../utils.js'

function createShoppingBagComponent() {
  try {
    fetch('components/shoppingBag/shoppingBag.html')
      .then((r) => { return r.text(); })
      .then((s) => {
        var parser = new DOMParser();
        var htmlParsed = parser.parseFromString(s, 'text/html');

        var template = htmlParsed.body.querySelector('div');
        if (template !== null) {
          document.querySelector('.nav-principal').append(template);
        }
      });
  } catch (error) {
    alert('Sorry, an error occurred. Please contact support.');
    console.log(error);
    return null;
  }
}

function eventShoppingBag(index, price) {
  const button = document.getElementById(`button${index}`);
  const parent = button.parentElement;
  const elementValue = document.getElementById('bag-value')
  const totalValueBag = parseFloat(elementValue.getAttribute('value'));

  if (utils.toggleSelectedClass(parent)) {
    utils.changeInnerHTML(button, 'Remove from Shopping Bag');
    addTotalValueBag(price, totalValueBag, elementValue);
  } else {
    utils.changeInnerHTML(button, 'Add to Shopping Bag');
    removeTotalValueBag(price, totalValueBag, elementValue);
  };
}

var addTotalValueBag = (price, totalValueBag, elementValue) => {
  totalValueBag = parseFloat(totalValueBag) + parseFloat(price.amount);
  elementValue.textContent = utils.formatPrice(price, totalValueBag);
  elementValue.setAttribute('value', totalValueBag);
}

var removeTotalValueBag = (price, totalValueBag, elementValue) => {
  totalValueBag = parseFloat(totalValueBag) - parseFloat(price.amount);
  console.log(totalValueBag);
  elementValue.textContent =  utils.formatPrice(price, totalValueBag);
  elementValue.setAttribute('value', totalValueBag);
}

export { createShoppingBagComponent, eventShoppingBag }
