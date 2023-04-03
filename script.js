import { Student } from "./student.js";
import { appendCard, renderCards, updateCard as renderUpdatedCard } from "./renderer.js";
import { putStudent, postStudent, deleteStudent } from "./api.js";

let students;

const deleteCard = async (studentId) => {
    document.querySelector("#card-" + studentId).remove();
    students = students.filter(student => student.id !== studentId);
    await deleteStudent(studentId);
}

const updateCard = () => {
    const newStudent = new Student();
    
    newStudent.id = document.querySelector("#studentId").value,
    newStudent.name = document.querySelector("#studentName").value,
    newStudent.isActive = document.querySelector("#studentIsActive").checked,
    newStudent.birthYear = Number(document.querySelector("#studentBirthYear").value),
    newStudent.connections = Number(document.querySelector("#studentConnections").value),
    newStudent.completedCredits = Number(document.querySelector("#studentCompletedCredits").value),
    newStudent.activeSemesterCount = Number(document.querySelector("#studentSemesterCount").value),
    newStudent.image = document.querySelector("#studentImage").value,

    students.forEach(async (student, index) => {
        if(student.id === newStudent.id)
        {
           putStudent(newStudent);

            students[index].name = newStudent.name;
            students[index].isActive = newStudent.isActive;
            students[index].birthYear = newStudent.birthYear;
            students[index].connections = newStudent.connections;
            students[index].completedCredits = newStudent.completedCredits;
            students[index].image = newStudent.image;
        }
    });

    renderUpdatedCard(newStudent);
}

const createCard = () => {
    const newStudent = document.querySelector("#studentJSON");
    postStudent(JSON.parse(newStudent));
    appendCard(JSON.parse(newStudent));
}

(async function () {
    const response = await fetch("https://practiceapi.nikprog.hu/Student");
    students = await response.json();
    students = students.map(student => new Student(student));

    renderCards(students);
    
    document.querySelector("#update-student-button").onclick = updateCard;
    document.querySelector("#add-student-button").onclick = createCard;

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