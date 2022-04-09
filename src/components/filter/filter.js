function addEventToFilter() {
  let input = document.getElementById('filter');
  input.addEventListener('input', () => myFilter());
}

var myFilter = () => {
  const input = document.getElementById('filter');
  const filter = input.value.toUpperCase();
  const list = document.getElementById('shopping-itens');
  const sections = list.getElementsByTagName('section');
  let countHidden = 0;

  for (let i = 0; i < sections.length; i++) {
    const title = sections[i].querySelector('.item-title');

    if (!title)
      continue;

    if (title.innerHTML.toUpperCase().indexOf(filter) > -1 || filter.length <= 2) {
      sections[i].style.display = '';
    } else {
      sections[i].style.display = 'none';
      countHidden++;
    }
  }
  validateFilter(countHidden, sections);
}

var validateFilter = (countHidden, sections) => {
  const alertEmpty = document.getElementById('alert-filter');
  if (countHidden == sections.length) {
    alertEmpty.style.display = '';
  } else {
    alertEmpty.style.display = 'none';
  }
}

export { addEventToFilter }
