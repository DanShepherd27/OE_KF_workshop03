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
    newStudent.isActive = document.querySelector("#studentIsActive").checked,
    newStudent.birthYear = Number(document.querySelector("#studentBirthYear").value),
    newStudent.connections = Number(document.querySelector("#studentConnections").value),
    newStudent.completedCredits = Number(document.querySelector("#studentCompletedCredits").value),
    newStudent.activeSemesterCount = Number(document.querySelector("#studentSemesterCount").value),
    newStudent.image = document.querySelector("#studentImage").value,
    
    console.log(`New student: ${JSON.stringify(newStudent)}`);

    students.forEach(async student => {
        if(student.id === newStudent.id)
        {
            const response = await fetch("https://practiceapi.nikprog.hu/Student", {
                method: 'PUT',
                headers: {
                'Content-type': 'application/json'
                },
                body: JSON.stringify(newStudent)
            });
            const resData = await response.json();
            console.log(resData);
            student = newStudent;
            renderCards(students);
        }
    });
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