const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const item = ingredients.map((ing) => {
  const li = document.createElement("li");
  li.textContent = ing;
  return li;
});
console.log(item);

const ent = document.querySelector("#ingredients");
ent.append(...item);
