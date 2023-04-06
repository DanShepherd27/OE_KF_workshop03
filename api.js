export const getAllStudents = async () => {
  const response = await fetch("https://practiceapi.nikprog.hu/Student");
  const students = await response.json();
  return students;
};

export const putStudent = async (student) => {
  await fetch("https://practiceapi.nikprog.hu/Student", {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(student),
  });
};

export const postStudent = async (student) => {
  const response = await fetch("https://practiceapi.nikprog.hu/Student", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(student),
  });
  const data = await response.json();
  return data;
};

export const deleteStudent = async (studentId) => {
  console.log(`API: Student with id ${studentId} has been deleted.`);
  await fetch(`https://practiceapi.nikprog.hu/Student/${studentId}`, {
    method: "delete",
  });
};
