const btn = document.querySelector(".btn");
const notifica = document.querySelector("#notifications");
btn.addEventListener("click", build);
console.log(notifica);
function build() {
  const newnotification = document.createElement("div");

  newnotification.innerHTML = ` 
 <div class="notification">
            <p>you updated</p>
            <img src="/images/akar-icons_circle-alert.png" alt="">
        </div>

`;
  notifica.prepend(newnotification);
}
