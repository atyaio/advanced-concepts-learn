function renderToHtml(paragraph) {
  const mainElement = document.getElementById('main');
  const paragraphElement = document.createElement('p');

  paragraphElement.textContent = paragraph;
  mainElement.appendChild(paragraphElement);
}

function createCaffeineAddict(coffeeType) {
  const addiction = `addicted to ${coffeeType}`;
  return function getHigh() {
    const highMessage = `Feeling wired and ${addiction}!`;
    return highMessage;
  };
}

const espressoJunkie = createCaffeineAddict('espresso');
const latteLover = createCaffeineAddict('latte');

renderToHtml(espressoJunkie());
renderToHtml(latteLover());
