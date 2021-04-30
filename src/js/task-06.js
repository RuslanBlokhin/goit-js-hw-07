const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  if (input.value.length === +input.dataset.length) {
    updateClass("valid", "invalid");
  } else {
    updateClass("invalid", "valid");
  }
});

function updateClass(addClass, remClass) {
  input.classList.add(addClass);
  input.classList.remove(remClass);
}
