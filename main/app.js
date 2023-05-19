const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const dashboard = document.querySelector(".dashBoard");
const profile = document.querySelector(".notification--img");
const profileClose = document.querySelector(".profile--close");
const mainProfile = document.querySelector(".profile");
const userImage = document.querySelector(".profile--pic");
const file = document.querySelector("#file");
const upload = document.querySelector(".profile-input");
const toggleTImage = document.querySelector(".header--image");
const notificationImage = document.querySelector(".notification--img");
const userName = document.querySelector(".username");
const profileName = document.querySelector(".profile--username");
const profileEmail = document.querySelector(".profile--email");

// const setReminderPopup = document.querySelector(".set--reminder--popup");
// const setReminderClose = document.querySelector(".popup--close--setReminder");
// const SetreminderSave = document.querySelector(".set--reminder--save");
toggleBtn.addEventListener("click", function () {
  dashboard.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  dashboard.classList.remove("show-sidebar");
});
profile.addEventListener("click", () => {
  mainProfile.classList.toggle("show--profile");
});
profileClose.addEventListener("click", () => {
  mainProfile.classList.remove("show--profile");
});
file.addEventListener("change", function () {
  userImage.src = URL.createObjectURL(file.files[0]);
  toggleTImage.src = URL.createObjectURL(file.files[0]);
  notificationImage.src = URL.createObjectURL(file.files[0]);
});
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
// setup
const data = {
  labels: [
    "Jan 2023",
    "Feb 2023",
    "Mar 2023",
    "Apr 2023",
    "May 2023",
    "Jun 2023",
    "July 2023",
  ],
  datasets: [
    {
      label: "Income",
      data: [18000, 12000, 60000, 29000, 12000, 30000, 19000],
      backgroundColor: ["rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
    {
      label: "Expense",
      data: [11000, 2000, 16000, 9000, 10000, 33000, 39000],
      backgroundColor: ["#2007b4"],
      borderColor: ["#2007b4"],
      borderWidth: 1,
    },
  ],
};
// config
const config = {
  type: "bar",
  data,
  options: {
    maintainAspectRatio: false,
    locale: "en-NG",
    scales: {
      y: {
        ticks: {
          callback: (value, index, values) => {
            // return value;
            return new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
              maximumSignificantDigits: 3,
            }).format(value);
          },
        },
        beginAtZero: true,
      },
    },
  },
};
// init
const myChart = new Chart(document.getElementById("myChart"), config);

// config

// render init block

// Instantly assign Chart.js version
const chartVersion = document.getElementById("chartVersion");
// chartVersion.innerText = Chart.version;
// Set a cookie with an expiration date
document.cookie =
  "username=John Doe; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";

// Retrieve the value of the cookie
const cookieValue = document.cookie
  .split("; ")
  .find((row) => row.startsWith("username="))
  .split("=")[1];

console.log(cookieValue); // Output: John Doe
// Get the query parameter from the URL

// Get the query parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const message = urlParams.get("message");

// Use the message as needed
console.log(message); // Output: User created
const username = message.split(":")[1].trim();

// Store the username in Local Storage
localStorage.setItem("username", username);

// Retrieve the username from Local Storage
const storedUsername = localStorage.getItem("username");
userName.textContent = ` Hello ${storedUsername}`;
profileName.textContent = storedUsername;
sessionStorage.setItem("username", username);

// Retrieve data from session storage
username = sessionStorage.getItem("username");

console.log(username); // Output: John Doe
// Use the stored username as needed
console.log(storedUsername);
const email = localStorage.getItem("email");
console.log(email);
profileEmail.textContent = email;
