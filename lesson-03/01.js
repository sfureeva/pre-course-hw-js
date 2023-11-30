const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
  return colors
    .filter(
      (element) =>
        element === "черный" || element === "красный" || element === "желтый"
    )
    .join("-");
}

console.log(createColorString());