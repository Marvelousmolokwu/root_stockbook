const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const button = document.getElementById("submit");
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

button.addEventListener("click", (e) => {
  e.preventDefault();

  const email = userEmail.value;
  const password = userPassword.value;

  if (email.trim() === "" || password.trim() === "") {
    // Show an error message or perform any desired action
    console.log("Please enter both email and password");
    return; // Exit the function to prevent further execution
  }

  // Store email and password in Local Storage
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  fetch("https://amica.onrender.com/users/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const queryParams = new URLSearchParams({
        message: `User created: ${data.name}`,
        email: email,
      }).toString();
      window.location.href = `/main/dashboard.html?${queryParams}`;
    })
    .catch((err) => console.log(err));
});
