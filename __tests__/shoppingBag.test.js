const { createShoppingBagComponent, eventShoppingBag } = require("../src/components/shoppingBag/shoppingBag");

global.fetch = jest.fn(() =>
  Promise.resolve({
    text: () => Promise.resolve(`<div class="shopping-bag">
                                    <p id="bag-value" value="0.0">0,00</p>
                                    <img src="assets/shoppingBag.png"  width="30px" height="30px" alt="Shopping Bag">
                                </div>`
    )
  })
);

beforeEach(() => {
  fetch.mockClear();
});

test("Check if shoppingBagComponent is created", () => {
  document.body.innerHTML = `<div class="nav-principal">
                              <div>
                                  <a href="#"><img src="assets/mb-star.svg" width="50px" height="50px" alt="Mercedes-Benz-Star" style="padding-left: 30px;"></a>
                                  <img src="assets/mb-wordmark.svg" width="110px" height="30px" alt="Mercedes-Benz-Star" style="padding-left: 40px;">
                                </div>
                              </div>`;
  createShoppingBagComponent();
  var component = document.querySelector('.shopping-bag');

  expect(component).toBeNull();
  expect(fetch).toHaveBeenCalledTimes(1);
});

test('Check if shoppingBagComponent is not created', () => {
  createShoppingBagComponent();
  var component = document.querySelector('.shopping-bag');

  expect(component).not.toBeNull();
  expect(fetch).toHaveBeenCalledTimes(1);
});

test('call eventShoppingBag with to show selected', () => {
  var price = {
    "amount": "29500.00",
    "currency": "EUR",
    "locale": "de-DE"
  }
  var index = 1;
  var button = document.createElement('button');
  button.id = `button${index}`;
  document.body.appendChild(button);

  eventShoppingBag(index, price);

  expect(button.classList.contains('selected')).toBeDefined();
});

test('call eventShoppingBag with hidden selected class', () => {
  var price = {
    "amount": "29500.00",
    "currency": "EUR",
    "locale": "de-DE"
  }
  var index = 1;
  var button = document.createElement('button');
  document.body.appendChild(button);

  eventShoppingBag(index, price);

  expect(button.classList.contains('selected')).toBeFalsy();
});
