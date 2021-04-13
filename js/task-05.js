const inputTextEl = document.querySelector("#name-input");
const outputTextEl = document.querySelector("#name-output");

inputTextEl.addEventListener("input", () => {
  inputTextEl.value === ""
    ? (outputTextEl.textContent = "незнакомец")
    : (outputTextEl.textContent = inputTextEl.value);
});
