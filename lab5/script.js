function validateForm() {
  document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const fullName = document.getElementById("fullName");
      const group = document.getElementById("group");
      const idCard = document.getElementById("id-card");
      const dateOfBirth = document.getElementById("dateOfBirth");
      const email = document.getElementById("email");

      [fullName, group, idCard, dateOfBirth, email].forEach((input) =>
        input.classList.remove("error", "valid")
      );

      const namePattern =
        /^[А-ЯІЇЄҐа-яіїєґ']+\s[А-ЯІЇЄҐа-яіїєґ]\.[А-ЯІЇЄҐа-яіїєґ]\.$/;
      const groupPattern = /^[A-Za-zА-ЯІЇЄҐа-яіїєґ]{2}-\d{2}$/;
      const idCardPattern = /^[A-Za-zА-ЯІЇЄҐа-яіїєґ]{2} №\d{6}$/;
      const dateOfBirthPattern = /^\d{2}\.\d{2}\.\d{4}$/;
      const emailPattern =
        /^[A-Za-zА-ЯІЇЄҐа-яіїєґ0-9._%+-]{1,63}@[A-Za-zА-ЯІЇЄҐа-яіїєґ0-9.-]{1,253}\.com$/;

      let isValid = true;

      if (!namePattern.test(fullName.value)) {
        fullName.classList.add("error");
        isValid = false;
      } else {
        fullName.classList.add("valid");
      }
      if (!groupPattern.test(group.value)) {
        group.classList.add("error");
        isValid = false;
      } else {
        group.classList.add("valid");
      }
      if (!idCardPattern.test(idCard.value)) {
        idCard.classList.add("error");
        isValid = false;
      } else {
        idCard.classList.add("valid");
      }
      if (!dateOfBirthPattern.test(dateOfBirth.value)) {
        dateOfBirth.classList.add("error");
        isValid = false;
      } else {
        dateOfBirth.classList.add("valid");
      }
      if (!emailPattern.test(email.value)) {
        email.classList.add("error");
        isValid = false;
      } else {
        email.classList.add("valid");
      }

      if (isValid) {
        document.getElementById("enteredDataForm").innerHTML = `
        <div id="result">
        <h2>Введені дані</h2>
              <p><strong>ПІБ:</strong> ${fullName.value}</p>
              <p><strong>Група:</strong> ${group.value}</p>
              <p><strong>ID-card:</strong> ${idCard.value}</p>
              <p><strong>Дата народження:</strong> ${dateOfBirth.value}</p>
              <p><strong>Email:</strong> ${email.value}</p>
        </div>
          `;
      } else {
        alert("Будь ласка, перевірте помилки у формі.");
      }
    });
}

validateForm();

const variantNumber = "7";
let lastRandomColor = "";

function tableFilling() {
  let rows = 6;
  let cols = 6;
  let table = document.getElementById("tableToChange");
  for (let i = 0; i < rows; i++) {
    var row = table.insertRow(i);
    for (let j = 0; j < cols; j++) row.insertCell(j);
  }
}

function getRandomColor() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  const color =
    "rgb(" + o(r() * s) + ", " + o(r() * s) + ", " + o(r() * s) + ")";
  lastRandomColor = color;
  return color;
}

function printNumbers() {
  let rows = document.getElementById("tableToChange").children[0].children;
  for (let i = 0; i < rows.length; i++) {
    let cols = rows[i].children;
    for (let j = 0; j < cols.length; j++) {
      let cell = cols[j];
      cell.innerHTML = `${i * 6 + j + 1}`;
      cell.addEventListener("mouseover", changeColorByHover);
      cell.addEventListener("mouseout", changeColorByUnhover);
      cell.addEventListener("click", changeColorByClick);
      cell.addEventListener("dblclick", changeColorByDbclick);
    }
  }
}

function changeColorByHover(e) {
  if (e.srcElement.innerHTML !== variantNumber) {
    return;
  }

  this.style.background = getRandomColor();
}

function changeColorByUnhover(e) {
  if (e.srcElement.innerHTML !== variantNumber) {
    return;
  }

  if (this.style.background === lastRandomColor) {
    this.style.background = "white";
  }
}

function changeColorByClick(e) {
  if (e.srcElement.innerHTML !== variantNumber) {
    return;
  }
  e.target.style.backgroundColor = document.getElementById("palette").value;
}

function changeColorByDbclick(e) {
  let selectedRowIndex = e.target.parentElement.rowIndex;
  let rows = document.getElementById("tableToChange").rows;
  for (let i = selectedRowIndex; i < rows.length; i += 2) {
    let currentColor = rows[i].style.backgroundColor;
    let newColor =
      currentColor === "plum" || currentColor === "" ? "white" : "plum";

    rows[i].style.backgroundColor = newColor;

    if (i === selectedRowIndex) {
      e.target.style.backgroundColor = newColor;
    }
  }
}
tableFilling();
printNumbers();
