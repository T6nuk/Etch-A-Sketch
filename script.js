// create a 16x16 grid
const rows = 16;
const columns = 16;
const container = document.querySelector("#container");

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.classList.add("row-item");
    row.style.backgroundColor = "blue";
    row.style.display = "flex";
    row.style.flexDirection = "column";
    row.style.flex = "auto";
    for (let j = 0; j < columns; j++) {
      let column = document.createElement("div");
      column.classList.add("column-item");
      columnItem = document.querySelector(".column-item");
      column.style.display = "flex";
      column.style.flex = "1";
      column.style.backgroundColor = "pink";
      row.appendChild(column);

      column.addEventListener("mouseover", () => {
        column.style.backgroundColor = "red";
      });
    }
    container.appendChild(row);
  }
});
