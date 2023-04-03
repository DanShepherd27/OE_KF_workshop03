(async function () {
    const response = await fetch("https://practiceapi.nikprog.hu/Student");
    const students = await response.json();
    console.log(students);

    students.forEach(student => {
        const card = document.createElement('div');
        card.innerHTML =  
        `<div class="card" style="width: 18rem;">
            <img src="${student.image}" class="card-img-top" alt="...">
            <h5 class="card-title">${student.name}</h5>
            <div class="card-body">
                <p class="card-text">Birth year: ${student.birthYear}</p>
                <p class="card-text">Completed credits: ${student.completedCredits}</p>
                <p class="card-text">Semester count: ${student.activeSemesterCount}</p>
                <p class="card-text">Connections: ${student.connections}</p>
            </div>
        </div>`;
        document.querySelector("#student-list").appendChild(card);
    });
})();