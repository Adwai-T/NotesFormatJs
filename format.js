//Formate Html add to all html

// -- Move index to right
let index = document.getElementById("index");

const indexUpButton = document.createElement("button");
indexUpButton.id = "indexUp";
indexUpButton.innerHTML =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg>';

const indexDownButton = document.createElement("button");
indexDownButton.id = "indexDown";
indexDownButton.innerHTML =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>';

index.appendChild(indexUpButton);
index.appendChild(indexDownButton);

let indexToggle = document.getElementById("index-toggle");
let indexList = document.getElementById("index-list");
let indexBoundingBox = indexList.getClientRects();

const indexScrollSpeed = 25; //in px
let indexListTop = 0;

// -- Index visibility
indexToggle.onclick = function (e) {
  if (index.style.visibility === "hidden") {
    index.style.visibility = "visible";
  } else {
    index.style.visibility = "hidden";
  }
};

indexUpButton.onclick = function (e) {
  if (indexList.getClientRects()[0].y < 0) {
    indexListTop += indexScrollSpeed;
    indexList.style.top = indexListTop + "px";
  }
};

indexDownButton.onclick = function (e) {
  if (
    indexList.getClientRects()[0].bottom > document.documentElement.clientHeight
  ) {
    indexListTop -= indexScrollSpeed;
    indexList.style.top = indexListTop + "px";
  }
};
