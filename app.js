function createGrid() {
  const h1 = document.querySelector("h1");
  const border = document.createElement("div");
  border.className = "wrapper";
  h1.append(border);
  const btn = document.createElement("button");
  btn.innerText = "Reset";

  h1.append(btn);

  for (i = 0; i < 64; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "box";
    border.appendChild(newDiv);

    hover = () => (newDiv.className = "draw");
    newDiv.addEventListener("mouseover", hover);

    clearGrid = () => (newDiv.className = "box");
    btn.addEventListener("click", clearGrid);
  }
}

createGrid();
