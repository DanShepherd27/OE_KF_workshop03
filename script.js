import { Student } from "./student.js";
import {
  appendCard,
  renderCards,
  updateCard as renderUpdatedCard,
  removeCard,
  loadDataIntoForm,
} from "./renderer.js";
import {
  getAllStudents,
  putStudent,
  postStudent,
  deleteStudent,
} from "./api.js";

let students;

export const deleteCard = async (studentId) => {
  removeCard(studentId);
  students = students.filter((student) => student.id !== studentId);
  await deleteStudent(studentId);
};

export const updateDeleteAndSelectButtons = (student) => {
  document.querySelector("#delete-button-" + student.id).onclick = () =>
    deleteCard(student.id);
  document.querySelector("#select-button-" + student.id).onclick = () =>
    loadDataIntoForm(student);
};

export const updateCard = async () => {
  let newStudent = new Student({
    id: document.querySelector("#studentId").value,
    name: document.querySelector("#studentName").value,
    isActive: document.querySelector("#studentIsActive").checked,
    birthYear: Number(document.querySelector("#studentBirthYear").value),
    connections: Number(document.querySelector("#studentConnections").value),
    completedCredits: Number(
      document.querySelector("#studentCompletedCredits").value
    ),
    activeSemesterCount: Number(
      document.querySelector("#studentSemesterCount").value
    ),
    image: document.querySelector("#studentImage").value,
  });

  // update student
  const studentToUpdate = students.find(
    (student) => student.id === newStudent.id
  );
  if (studentToUpdate) {
    studentToUpdate.name = newStudent.name;
    studentToUpdate.isActive = newStudent.isActive;
    studentToUpdate.birthYear = newStudent.birthYear;
    studentToUpdate.connections = newStudent.connections;
    studentToUpdate.completedCredits = newStudent.completedCredits;
    studentToUpdate.activeSemesterCount = newStudent.activeSemesterCount;
    studentToUpdate.image = newStudent.image;
    putStudent(newStudent);
  } else {
    newStudent = await postStudent(newStudent);
    students.unshift(newStudent);
  }
  renderUpdatedCard(newStudent);
};

export const createCard = async () => {
  let newStudent = document.querySelector("#studentJSON").value;
  newStudent = await postStudent(JSON.parse(newStudent));
  appendCard(newStudent);
};

export const filterCards = () => {
  const dropdown = document.querySelector("#filter-dropdown");
  document.querySelector("#student-list").innerHTML = "";
  switch (dropdown.value) {
    case "all":
      renderCards(students);
      break;
    case "active":
      renderCards(students.filter((s) => s.isActive));
      break;
    case "passive":
      renderCards(students.filter((s) => !s.isActive));
      break;
  }
};

(async function () {
  students = await getAllStudents();
  students = students.map((student) => new Student(student));

  renderCards(students);

  document.querySelector("#update-student-button").onclick = updateCard;
  document.querySelector("#add-student-button").onclick = createCard;
  document.querySelector("#filter-dropdown").onchange = filterCards;
})();

/*
my student:

{
    "id": "e9e8211a-20c2-4467-bf6b-e2b0fe0b09ff",
    "name": "JD - Gipsz Jakab",
    "isActive": true,
    "birthYear": 2000,
    "connections": 13,
    "completedCredits": 155,
    "activeSemesterCount": 6,
    "image": "https://picsum.photos/400"
  }
*/
