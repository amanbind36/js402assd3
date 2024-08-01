const students = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 19 },
  { name: "Charlie", age: 23 },
  { name: "David", age: 20 }
];


function sortByAgeDescending(a, b) {
  return b.age - a.age;
}
function sortStudentsByCondition(students, conditionFn) {
  var sortedStudents = students.slice(); 
  return sortedStudents.sort(function(a, b) {
    return conditionFn(a, b);
  });
}

// Output
const sortedStudents = sortStudentsByCondition(students, sortByAgeDescending);
console.log(sortedStudents);
