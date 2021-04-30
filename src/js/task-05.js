let input = document.querySelector("#name-input");
let output = document.querySelector("#name-output");

input.oninput = () => (output.textContent = input.value || "незнакомец");
