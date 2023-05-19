const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const userPhone = document.getElementById("phone");

const button = document.getElementById("submit");
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
button.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("https://amica.onrender.com/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email: userEmail.value,
      password: userPassword.value,
      phone: userPhone.value,
      name: userName.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      window.location.href = `/index.html`;
    })

    .catch((err) => console.log(err));
  console.log("clicked");
});
