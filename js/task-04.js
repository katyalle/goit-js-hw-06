const counterValue = document.getElementById('value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

let currentValue = 0;

decrementButton.addEventListener('click', () => {
  currentValue -= 1;
  updateCounter();
});

incrementButton.addEventListener('click', () => {
  currentValue += 1;
  updateCounter();
});

function updateCounter() {
  counterValue.textContent = currentValue;
}