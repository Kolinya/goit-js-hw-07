const inputEl = document.querySelector("#validation-input");

const onInputBlur = () => {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
  } else inputEl.classList.add("invalid");
};

const onInputFocus = () => {
  inputEl.classList.remove("valid");
  inputEl.classList.remove("invalid");
};

inputEl.addEventListener("blur", onInputBlur);
inputEl.addEventListener("focus", onInputFocus);
