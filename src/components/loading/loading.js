function createLoadingComponent() {
  try {
    fetch('././components/loading/loading.html')
    .then((r) => { return r.text(); })
    .then((s) => {
      const parser = new DOMParser();
      const htmlParsed = parser.parseFromString(s, 'text/html');
      const template = htmlParsed.body.querySelector('div');
      if (template !== null) {
        document.querySelector('main').append(template);
      }
    });
  } catch (error) {
    alert('Sorry, an error occurred. Please contact support.')
    console.log(error);
    return null;
  }
}

function hidden() {
  var loader = document.querySelector('#loading');
  loader.style.display = 'none';
}

function display() {
  var loader = document.querySelector('#loading');
  loader.style.display = 'block';
}

export { createLoadingComponent, hidden, display }
