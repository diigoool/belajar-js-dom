const btn = document.getElementById("btnAku");
const body = document.querySelector("body");

btn.addEventListener("click", function () {
  // body.style.backgroundColor = "pink";
  // document.body.setAttribute("class", "biru-muda");
  document.body.classList.toggle("biru-muda");
});

const btnBaru = document.createElement("button");
const txtBtn = document.createTextNode("Tombol Ubah Warna");

btnBaru.appendChild(txtBtn);
btnBaru.setAttribute("type", "button");

btn.after(btnBaru);

btnBaru.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// Slider

const sMerah = document.getElementsByClassName("sMerah")[0];
const sHijau = document.getElementsByClassName("sHijau")[0];
const sBiru = document.getElementsByClassName("sBiru")[0];

sMerah.addEventListener("input", function () {
  const sliderR = sMerah.value;
  const sliderG = sHijau.value;
  const sliderB = sBiru.value;
  document.body.style.backgroundColor =
    "rgb(" + sliderR + "," + sliderG + "," + sliderB + ")";
});

sHijau.addEventListener("input", function () {
  const sliderR = sMerah.value;
  const sliderG = sHijau.value;
  const sliderB = sBiru.value;
  document.body.style.backgroundColor =
    "rgb(" + sliderR + "," + sliderG + "," + sliderB + ")";
});

sBiru.addEventListener("input", function () {
  const sliderR = sMerah.value;
  const sliderG = sHijau.value;
  const sliderB = sBiru.value;
  document.body.style.backgroundColor =
    "rgb(" + sliderR + "," + sliderG + "," + sliderB + ")";
});

document.body.addEventListener("mousemove", function (event) {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerWidth) * 255);

  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
});
