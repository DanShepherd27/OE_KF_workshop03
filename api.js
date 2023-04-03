export const putStudent = async (student) => {
    await fetch("https://practiceapi.nikprog.hu/Student", {
        method: 'PUT',
        headers: {
        'Content-type': 'application/json'
        },
        body: JSON.stringify(student)
    });
}

export const postStudent = async (student) => {
    await fetch("https://practiceapi.nikprog.hu/Student", {
        method: 'POST',
        headers: {
        'Content-type': 'application/json'
        },
        body: JSON.stringify(student)
    });
}

export const deleteStudent = async (id) => {
    await fetch(`https://practiceapi.nikprog.hu/Student/${studentId}`);
}