document.getElementById('subjectsNumberForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const subjectsNumber = document.getElementById('subjectsNumber').value;

});

document.getElementById('calculationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const grades = [];
  for (let i = 1; i <= 4; i++) {
    const grade = parseFloat(document.getElementById(`gradesInput${i}`).value);
    if (!isNaN(grade)) {
      grades.push(grade);
    }
  }
  const average = grades.reduce((a, b) => a + b, 0) / grades.length;
  console.log('Average grade:', average);
});