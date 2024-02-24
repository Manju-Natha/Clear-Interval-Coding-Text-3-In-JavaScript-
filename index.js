let nameEl = document.getElementById("name");
let inputValueEl = document.getElementById("inputValue");
let saveBtnEl = document.getElementById("saveBtn");
let resetBtnEl = document.getElementById("resetBtn");

nameEl.textContent = "Varun";
nameEl.textContent = localStorage.getItem("name", inputValueEl);

let starValue = localStorage.setItem("name", inputValueEl.value);
saveBtnEl.onclick = function () {
  nameEl.textContent = inputValueEl.value;
  let starValue = localStorage.setItem("name", inputValueEl.value);
};

resetBtnEl.onclick = function () {
  localStorage.removeItem("name");
  nameEl.textContent = "Varun";
};
