// Closures

// a closure is a function that has access to the outer function's scope
// even after the outer function has returned

function createCaffeineAddict(coffeeType) {
  const addiction = `addicted to ${coffeeType}`;
  return function getHigh() {
    const highMessage = `Feeling wired and ${addiction}!`;
    console.log(highMessage);
  };
}
const espressoJunkie = createCaffeineAddict('espresso');
const latteLover = createCaffeineAddict('latte');
espressoJunkie();
latteLover();
