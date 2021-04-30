const inputRange = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

const rangeChange = () => {
  inputText.style.fontSize = `${inputRange.value}px`;
};

inputRange.addEventListener("input", rangeChange);
