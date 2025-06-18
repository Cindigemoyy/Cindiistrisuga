// === Rotasi Teks Otomatis ===
const kataList = ["ACTION", "DRAMA", "HORROR", "ROMANCE", "COMEDY", "THRILLER"];
let index = 0;

const textElement = document.querySelector(".kedua-text");

function gantiTeks() {
  textElement.textContent = kataList[index];
  index = (index + 1) % kataList.length;
}

gantiTeks();
setInterval(gantiTeks, 3000);

// === Alert untuk tombol Register dan Login ===
document.querySelector(".signup-btn").addEventListener("click", function () {
  alert("Website sedang dalam perbaikan.");
});

document.querySelector(".login-btn").addEventListener("click", function () {
  alert("Website sedang dalam perbaikan.");
});