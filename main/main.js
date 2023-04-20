// pop up
const addItem = document.querySelector(".add");
const popup = document.querySelector(".popup-container");
const close = document.querySelector(".popup--close");
const form1 = document.querySelector(".popup");

addItem.addEventListener("click", () => {
  popup.classList.add("show--popup");
});
close.addEventListener("click", () => {
  popup.classList.remove("show--popup");
});

// form
form1.addEventListener("submit", (e) => {
  e.preventDefault();
});

const table = document.getElementById("item-list");

const tbody = table.getElementsByTagName("tbody")[0];

// Load data from localStorage
const savedData = JSON.parse(localStorage.getItem("myData")) || [];
savedData.forEach((data) => {
  insertFormData(data);
});

function onFormSubmit() {
  if (validate()) {
    let formData = readFormData();
    insertFormData(formData);
    resetForm();
    popup.classList.remove("show--popup");

    // Save data to localStorage
    const savedData = JSON.parse(localStorage.getItem("myData")) || [];
    savedData.push(formData);
    localStorage.setItem("myData", JSON.stringify(savedData));
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
  let newRow = tbody.insertRow(tbody.length);
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
    tbody.deleteRow(row.rowIndex - 1, 1);
    resetForm();

    // Remove data from localStorage
    const savedData = JSON.parse(localStorage.getItem("myData")) || [];
    savedData.splice(row.rowIndex - 1, 1);
    localStorage.setItem("myData", JSON.stringify(savedData));
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

// second form
