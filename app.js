const subjectTemplate = document.getElementById('subjectTemplate')
const resultsTableBody = document.getElementById('resultsTableBody')
const resultsContainer = document.getElementById('resultsContainer')
resultsContainer.style.display = 'none'

document.getElementById('subjectsNumberForm').addEventListener('submit', function(event){
    event.preventDefault()
    const n = parseInt(document.getElementById('subjectsNumber').value)
    if (isNaN(n) || n <= 0 || n >= 8) return
    document.getElementById('calculationForm').innerHTML = ''
    for (var i = 1; i <= n; i++){
        document.getElementById('calculationForm').innerHTML += '<div class="subject"><h4>Materia '+i+'</h4>' + subjectTemplate.innerHTML + '</div>'
    }
    document.getElementById('calculationForm').innerHTML += '<button type="submit" class="btn btn-primary">Calcular promedios</button>'
})

document.getElementById('calculationForm').addEventListener('submit', function(event){
    event.preventDefault()
    resultsTableBody.innerHTML = ''
    var subjects = document.getElementById('calculationForm').getElementsByClassName('subject')
    for (var i = 0; i < subjects.length; i++){
        var grades = subjects[i].getElementsByClassName('grade')
        var sum = 0
        for (var j = 0; j < grades.length; j++){
            var v = parseFloat(grades[j].value)
            if (isNaN(v)) v = 0
            sum += v
        }
        var avg = grades.length ? sum / grades.length : 0
        var row = document.createElement('tr')


        row.innerHTML = '<td>Materia ' + (i+1) + '</td><td>' + avg.toFixed(2) + '</td>'

        if(avg >= 70){
            row.classList.add("table-success");
        } else {
            row.classList.add("table-danger");
        }
        resultsTableBody.appendChild(row)
    }
    resultsContainer.style.display = 'block'
})