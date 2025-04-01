//
const container = document.querySelector("#container");
// buttons on top
const newGridBtn = document.querySelector("#button-new-grid");
const clearGridBtn = document.querySelector("#button-clear-grid");
// color selector
const colorPicker = document.querySelector("#color-select");
// default color
let color = "black";

function createGrid(rowsN) {
  let rows = rowsN;
  let columns = rows;
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.classList.add("row-item");
    row.style.display = "flex";
    row.style.flexDirection = "column";
    row.style.flex = "auto";
    for (let j = 0; j < columns; j++) {
      let column = document.createElement("div");
      column.classList.add("column-item");
      columnItem = document.querySelector(".column-item");
      column.style.display = "flex";
      column.style.flex = "1";
      column.style.border = "1px dotted black";
      row.appendChild(column);

      column.addEventListener("mouseover", () => {
        paintSquare(column, color);
      });
    }
    container.appendChild(row);
  }
}

createGrid(32);

function paintSquare(tile, color) {
  tile.style.backgroundColor = color;
}

colorPicker.addEventListener("input", () => {
  color = colorPicker.value;
});

newGridBtn.addEventListener("click", () => {
  container.replaceChildren();
  let newRows = prompt("How many rows on your new grid?");
  if (newRows > 64) return alert("pick a smaller number, max 64");
  if (isNaN(newRows)) return alert("not a number, please write a number");

  createGrid(newRows);
});

clearGridBtn.addEventListener("click", (event) => {
  let tileList = document.querySelectorAll(".column-item");
  tileList.forEach((node) => {
    paintSquare(node, "antiquewhite");
  });
});
