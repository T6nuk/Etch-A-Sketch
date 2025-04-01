// create a 16x16 grid
const container = document.querySelector("#container");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  container.replaceChildren();
  let newRows = prompt("How many rows on your new grid?");
  if (newRows > 64) return alert("pick a smaller number, max 64");
  if (isNaN(newRows)) return alert("not a number, please write a number");
  console.log(newRows);

  createGrid(newRows);
});

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
      column.style.backgroundColor = "pink";
      row.appendChild(column);

      //   column.addEventListener("mouseover", () => {
      //     column.style.backgroundColor = "red";
      //   });
    }
    container.appendChild(row);
  }
}
