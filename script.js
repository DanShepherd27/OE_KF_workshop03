let students;

const deleteCard = (studentId) => {
    document.querySelector("#card-" + studentId).remove();
    students = students.filter(student => student.id !== studentId);
    // fetch(`https://practiceapi.nikprog.hu/Student/${studentId}`);
}

(async function () {
    const response = await fetch("https://practiceapi.nikprog.hu/Student");
    students = await response.json();
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