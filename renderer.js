export const renderCards = (students) => {
    // debugging
    console.log(students);

    // add list items
    students.forEach(student => {
        appendCard(student);
    });  
};

export const updateCard = (student) => {
    const card = document.querySelector("#card-" + student.id);
    card.remove();
    appendCard(student);
}

export const appendCard = (student) => {
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
    document.querySelector("#student-list").appendChild(card);}