const mainElement = document.getElementById('main');

// Closures

// a closure is a function that has access to the outer function's scope
// even after the outer function has returned

function createCaffeineAddict(coffeeType) {
  const addiction = `addicted to ${coffeeType}`;

  return function getHigh() {
    const highMessage = `Feeling wired and ${addiction}!`;

    const paragraph = document.createElement('p');
    paragraph.textContent = highMessage;
    mainElement.appendChild(paragraph);
  };
}
const espressoJunkie = createCaffeineAddict('espresso');
const latteLover = createCaffeineAddict('latte');

espressoJunkie();
latteLover();

// an example where scoping would give an error but closures work

// Closures attempt
function createCounterClosures() {
  let count = 0; // This variable is scoped to createCounterClosures

  function increment() {
    count += 1; // increment has access to count
    console.log(count);
  }

  // Returning increment function so it can be used outside
  return increment;
}

let myCounter = createCounterClosures(); // createCounterClosures runs and returns increment function

// Using the returned increment function
myCounter(); // 1
myCounter(); // 2
myCounter(); // 3

// Scoping attempt
function createCounterScoping() {
  let count = 0; // This variable is scoped to createCounterScoping

  function increment() {
    count += 1; // increment has access to count
    console.log(count);
  }

  // Returning increment function so it can be used outside
  return increment;
}

let myCounterScoping = createCounterScoping(); // createCounterScoping runs and returns increment function

// Trying to access 'count' directly outside its scope
console.log(count); // Error: count is not defined
