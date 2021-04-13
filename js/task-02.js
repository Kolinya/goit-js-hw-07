const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const itemRef = document.querySelector("#ingredients");

itemRef.append(
  ...ingredients.map((ingredient) => {
    const itemsRef = document.createElement("li");
    itemsRef.textContent = ingredient;
    return itemsRef;
  })
);
