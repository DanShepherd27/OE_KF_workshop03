import { Student } from "./student.js";
import { renderCards } from "./renderer.js";

let students;

export const deleteCard = (studentId) => {
    document.querySelector("#card-" + studentId).remove();
    students = students.filter(student => student.id !== studentId);
    // fetch(`https://practiceapi.nikprog.hu/Student/${studentId}`);
}

export const updateCard = () => {
    const newStudent = new Student();
    
    newStudent.id = document.querySelector("#studentId").value,
    newStudent.name = document.querySelector("#studentName").value,
    newStudent.isActive = document.querySelector("#studentIsActive").isChecked,
    newStudent.birthYear = Number(document.querySelector("#studentBirthYear").value),
    newStudent.connections = Number(document.querySelector("#studentConnections").value),
    newStudent.completedCredits = Number(document.querySelector("#studentCompletedCredits").value),
    newStudent.activeSemesterCount = Number(document.querySelector("#studentSemesterCount").value),
    newStudent.image = document.querySelector("#studentImage").value,
    
    console.log(`New student: ${JSON.stringify(newStudent)}`);

    let oldStudent = students.find(student => student.id === newStudent.id);

    oldStudent = newStudent;

    renderCards(students);

}

(async function () {
    const response = await fetch("https://practiceapi.nikprog.hu/Student");
    students = await response.json();
    students = students.map(student => new Student(student));

    renderCards(students);
    
    document.querySelector("#update-student-button").onclick = updateCard;
})();

/*
my student:

{
    "id": "de331e0a-b164-45a2-888b-aaa3d432b24a",
    "name": "JD - Gipsz Jakab",
    "isActive": true,
    "birthYear": 2000,
    "connections": 13,
    "completedCredits": 155,
    "activeSemesterCount": 6,
    "image": "https://picsum.photos/400"
  }
*/