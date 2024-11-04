const showInfo = document.getElementById("add-button");

if (showInfo) {
  showInfo.addEventListener("click", function () {
    addCardPersonInfo();
  });
}

const addCardPersonInfo = () => {
  fetch("https://randomuser.me/api")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      showCard(data.results[0]);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

const showCard = (user) => {
  const personInfo = document.getElementById("personInfo");
  personInfo.insertAdjacentHTML(
    "beforeend",
    `
  <div class="card">
  <div>
  <img src="${user.picture.large}" alt="User Picture">
  </div>
  <p><strong>Cell:</strong> ${user.cell}</p>
  <p><strong>City:</strong> ${user.location.city}</p>
  <p><strong>Postcode:</strong> ${user.location.postcode}</p>
  <p><strong>Email:</strong> ${user.email}</p>
  </div>
  `
  );
};
