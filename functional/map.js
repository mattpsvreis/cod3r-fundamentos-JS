const numbers = [1, 2, 3, 4, 5, 6]

const numbersMapped = numbers.map(el => el * 2)

console.log(numbers, numbersMapped)

const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 }
]

const getScore = el => el.score

const studentsMapped = students.map(getScore).map(Math.ceil)

console.log(students, studentsMapped)