import { Student } from "./student.js";

let students;

const deleteCard = (studentId) => {
    document.querySelector("#card-" + studentId).remove();
    students = students.filter(student => student.id !== studentId);
    // fetch(`https://practiceapi.nikprog.hu/Student/${studentId}`);
}

const updateCard = () => {
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

    const oldStudent = students.find(student => student.id === newStudent.id);

    oldStudent = newStudent;
}

(async function () {
    const response = await fetch("https://practiceapi.nikprog.hu/Student");
    students = await response.json();
    students = students.map(student => new Student(student));
    console.log(students);

    students.forEach(student => {
        const card = document.createElement('div');
        card.id = "card-" + student.id;
        card.innerHTML =  (student.isActive ? 
        `<div class="card border-success mb-3" style="max-width: 18rem;">` : 
        `<div class="card border-danger mb-3" style="max-width: 18rem;">`)
        +
        `<img src="${student.image}" class="card-img-top" alt="...">
            <h5 class="card-title">${student.name}</h5>
            <div class="card-body">
                <p class="card-text">Birth year: ${student.birthYear}</p>
                <p class="card-text">Completed credits: ${student.completedCredits}</p>
                <p class="card-text">Semester count: ${student.activeSemesterCount}</p>
                <p class="card-text">Connections: ${student.connections}</p>
            </div>
            <button id="delete-button-${student.id}" onclick="deleteCard('${student.id}')" class="btn btn-danger">Delete</button>
        </div>`;
        document.querySelector("#student-list").appendChild(card);
    });    
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