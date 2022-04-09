function changeInnerHTML(element, text) {
  element.innerHTML = text;
}

function toggleSelectedClass(element) {
  return element.classList.toggle('selected');
}

function displayFilter() {
  var filter = document.querySelector('.title-filter');
  filter.classList.remove('filter-hidden');
}

function displayFooter() {
  var footer = document.querySelector('footer');
  footer.style.display = 'block'
}

function formatPrice(price, total = 0) {
  return Intl.NumberFormat(price.locale, {
    style: "currency",
    currency: price.currency,
  }).format(total);
}

export { changeInnerHTML, toggleSelectedClass, displayFilter, displayFooter, formatPrice }
