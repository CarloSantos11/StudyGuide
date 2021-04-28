let students = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Douglas',
    major: 'Comp Sci'
  },
  {
    id: 2,
    firstName: 'Cami',
    lastName: 'Taylor',
    major: 'Comp Sci'
  },
  {
    id: 3,
    firstName: 'Warren',
    lastName: 'Douglas',
    major: 'Comp Sci'
  }
]

let myStudents = document.getElementById('students')
students.map(student => myStudents.innerHTML += `<h1>${student.firstName}</h1>`)