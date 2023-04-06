import { updateDeleteAndSelectButtons } from "./script.js";

export const renderCards = (students) => {
  // add list items
  students.forEach((student) => {
    appendCard(student);
  });
};

export const updateCard = (student) => {
  const card = document.querySelector("#card-" + student.id);
  card && card.remove();
  appendCard(student);
};

export const removeCard = (studentId) => {
  document.querySelector("#card-" + studentId).remove();
};

export const appendCard = (student) => {
  const card = document.createElement("li");
  card.className = "d-flex justify-content-center p-2";
  card.style = "max-width: 250px; width: 250px;";
  card.id = "card-" + student.id;
  card.innerHTML =
    (student.isActive
      ? `<div class="card border-success border-4 rounded-3 mb-3 w-100">
      <img src="${student.image}" class="card-img-top object-fit-cover h-50" alt="...">`
      : `<div class="card border-danger border-4 rounded-3 mb-3 w-100"> 
      <img src="${student.image}" class="card-img-top object-fit-cover h-50" style="filter: grayscale(100%); opacity: 70%;" alt="...">`) +
    `<div class="p-2">
        <h5 class="card-title">${student.name}</h5>
        <div class="card-body">
            <p class="card-text">Birth year: ${student.birthYear}</p>
            <p class="card-text">Completed credits: ${student.completedCredits}</p>
            <p class="card-text">Semester count: ${student.activeSemesterCount}</p>
            <p class="card-text">Connections: ${student.connections}</p>
        </div>
        <div class="d-flex justify-content-between">
            <button id="select-button-${student.id}" class="btn btn-primary p-2" style="width: 48%;">Select</button>
            <button id="delete-button-${student.id}" class="btn btn-danger p-2" style="width: 48%;">Delete</button>
        </div>
      </div>
    </div>`;
  document.querySelector("#student-list").appendChild(card);
  updateDeleteAndSelectButtons(student);
};

export const loadDataIntoForm = (student) => {
  document.querySelector("#studentId").value = student.id;
  document.querySelector("#studentName").value = student.name;
  document.querySelector("#studentIsActive").checked = student.isActive;
  document.querySelector("#studentBirthYear").value = student.birthYear;
  document.querySelector("#studentConnections").value = student.connections;
  document.querySelector("#studentCompletedCredits").value =
    student.completedCredits;
  document.querySelector("#studentSemesterCount").value =
    student.activeSemesterCount;
  document.querySelector("#studentImage").value = student.image;
};
