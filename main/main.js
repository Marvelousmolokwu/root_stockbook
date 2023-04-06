// pop up
const addItem = document.querySelector(".add");
const popup = document.querySelector(".popup-container");
const close = document.querySelector(".popup--close");
const form = document.querySelector(".popup");
addItem.addEventListener("click", () => {
  popup.classList.add("show--popup");
});
close.addEventListener("click", () => {
  popup.classList.remove("show--popup");
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
function onFormSubmit() {
  if (validate()) {
    let formData = readFormData();
    insertFormData(formData);
    resetForm();
    popup.classList.remove("show--popup");
  }
}
function readFormData() {
  let formData = {};
  formData["stockname"] = document.getElementById("stock-name").value;
  formData["stocktype"] = document.getElementById("stock-type").value;
  formData["stockamount"] = document.getElementById("stock-amount").value;
  formData["stockprice"] = document.getElementById("stock-price").value;
  return formData;
}
function insertFormData(data) {
  let table = document
    .getElementById("item-list")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.stockname;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.stocktype;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.stockamount;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.stockprice;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<img onClick="onDelete(this)" src="/images/Close_MD2.png" alt="" class="popup--close">`;
}
function resetForm() {
  document.getElementById("stock-name").value = "";
  document.getElementById("stock-type").value = "";
  document.getElementById("stock-amount").value = "";
  document.getElementById("stock-price").value = "";
}
function onDelete(td) {
  if (confirm("Are you sure you want to delete this record?")) {
    row = td.parentElement.parentElement;

    document.getElementById("item-list").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.getElementById("stock-name").value == "") {
    isValid = false;
    document.getElementById("fullNameValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      document
        .getElementById("fullNameValidationError")
        .classList.contains("hide")
    )
      document.getElementById("fullNameValidationError").classList.add("hide");
  }
  return isValid;
}
