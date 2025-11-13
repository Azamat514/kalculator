alert("Assalomu alaykum bu mening kalkulyator dasturim!");
let a = prompt("1 chi sonni kiriting:");
let amal = prompt("(+, -, *, /) amalni kiriting:");
let b = prompt("2 chi sonni kiriting:");
a = Number(a);
b = Number(b);
let natija;
if (amal === "+") {
  natija = a + b;
} else if (amal === "-") {
  natija = a - b;
} else if (amal === "*") {
  natija = a * b;
} else if (amal === "/") {
  if (b === 0) {
    alert("0 ga bo‘lish mumkin emas!");
  } else {
    natija = a / b;
  }
} else {
  alert("Noto‘g‘ri amal");
}

if (natija !== undefined) {
  alert(`Natija: ${natija}`);
}
