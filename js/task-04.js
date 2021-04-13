let counterValue = 0;

const decrementButtonEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButtonEl = document.querySelector(
  'button[data-action="increment"]'
);
const valueDisplayEl = document.querySelector("#value");

const decrement = () => {
  counterValue -= 1;
  valueDisplayEl.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  valueDisplayEl.textContent = counterValue;
};

decrementButtonEl.addEventListener("click", decrement);

incrementButtonEl.addEventListener("click", increment);
