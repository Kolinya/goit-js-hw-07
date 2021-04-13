const fontSizeRefs = {
  fontSizeControl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

const onInputSlide = () => {
  fontSizeRefs.text.style.fontSize = `${fontSizeRefs.fontSizeControl.value}px`;
};

fontSizeRefs.fontSizeControl.addEventListener("input", onInputSlide);
