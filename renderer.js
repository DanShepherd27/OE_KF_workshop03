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
  const card = document.createElement("div");
  card.id = "card-" + student.id;
  card.innerHTML =
    (student.isActive
      ? `<div class="card border-success mb-3" style="max-width: 18rem;">`
      : `<div class="card border-danger mb-3" style="max-width: 18rem;">`) +
    `<img src="${student.image}" class="card-img-top" alt="...">
        <h5 class="card-title">${student.name}</h5>
        <div class="card-body">
            <p class="card-text">Birth year: ${student.birthYear}</p>
            <p class="card-text">Completed credits: ${student.completedCredits}</p>
            <p class="card-text">Semester count: ${student.activeSemesterCount}</p>
            <p class="card-text">Connections: ${student.connections}</p>
        </div>
        <div class="d-flex justify-content-between">
            <button id="select-button-${student.id}" class="btn btn-primary w-50">Select</button>
            <button id="delete-button-${student.id}" class="btn btn-danger w-50">Delete</button>
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
