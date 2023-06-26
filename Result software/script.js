
const table = document.getElementById('report');

function addHeader() {
    const headerRow = document.createElement('tr');
    columnList.forEach(column => {
        const th = document.createElement('th');
        th.textContent = column;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
}

function getSemesterData(student) {
    if (student==undefined) {
        return;
    }
    var semester = document.getElementById('semester-select').value;

    for (var i = 0; i < student.marksheet.length; i++) {
        if (semester == student.marksheet[i].semester) {
            return student.marksheet[i];
        }
    }
}

function populateData(student) {
    var semesterData = getSemesterData(student);
    if(student==undefined || semesterData==undefined) {
        clearTable()
        document.getElementById("error").innerHTML = "Note: No Records found!!";
        return;
    }
    addHeader();
    data = semesterData.value;
    data.forEach(obj => {
        const row = document.createElement('tr');
        Object.values(obj).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });
        const cell = document.createElement('td');
        var result = calculateResult(obj.marks);
        cell.textContent = result;
        row.appendChild(cell);
        table.appendChild(row);
    });

    const percentage = calculatePercentage(data);
    const grade = calculateGrade(percentage);
    const result = calculateResult(percentage);
    const aggregate= calculateAggregateData(student);
    const aggregatePerc = aggregate.percentage;
    const backlogData = aggregate.backlogData;
    
    document.getElementById('rollNo').innerHTML = student.id;
    document.getElementById('name').innerHTML = student.name;
    document.getElementById('branch').innerHTML = branchMap[student.branch];
    document.getElementById('semester').innerHTML = semesterData.semester;
    document.getElementById('percentage').innerHTML = percentage + '%';
    document.getElementById('grade').innerHTML = grade;
    document.getElementById('result').innerHTML = result;
    document.getElementById('aggregate').innerHTML = aggregatePerc + '%';
    document.getElementById('backlog').innerHTML = backlogData;
}

function calculatePercentage(data) {

    var totalMarks = 0;
    var maxMarks = 0;
    data.forEach(subject => {
        totalMarks += subject.marks;
        maxMarks += subject.maxMarks;
    });
    var percentage = (totalMarks / maxMarks) * 100;

    return percentage.toFixed(2);
}

function calculateGrade(percentage) {
    if (percentage >= 90) {
        return 'A';
    } else if (percentage >= 80) {
        return 'B';
    } else if (percentage >= 70) {
        return 'C';
    } else if (percentage >= 60) {
        return 'D';
    } else if (percentage >= 40) {
        return 'E';
    } else {
        return 'F';
    }
}

function calculateResult(percentage) {
    if (percentage < 40) {
        return 'Fail';
   
        } else {
            return 'Pass';
        }
    }

function calculateAggregateData(student) {
    var totalMarks = 0;
    var maxMarks = 0;
    const aggregate = {};
    var backlog = [];
    for(var i=0;i<Object.values(student.marksheet).length;i++){
        var data = student.marksheet[i];
         for (var j=0;j<Object.values(data.value).length;j++) {
            var subjectData = data.value[j]
            if(calculateResult(subjectData.marks)=='Fail') {
                backlog.push(subjectData.subject + "[" + subjectData.id + "]")
            }
            totalMarks += subjectData.marks;
            maxMarks += subjectData.maxMarks;

        }
    }
    const percentage = (totalMarks / maxMarks) * 100;
    aggregate.percentage = percentage.toFixed(2);
    aggregate.backlogData = backlog;
    return aggregate;
}

function clearTable() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("report").innerHTML = "";
    document.getElementById('rollNo').innerHTML = "";
    document.getElementById('name').innerHTML = "";
    document.getElementById('branch').innerHTML = "";
    document.getElementById('semester').innerHTML = "";
    document.getElementById('percentage').innerHTML = "";
    document.getElementById('grade').innerHTML = "";
    document.getElementById('result').innerHTML = "";
    document.getElementById('aggregate').innerHTML = "";
    document.getElementById('backlog').innerHTML = "";
}

function findResult() {
    var branch = document.getElementById('branch-select').value;
    var studentId = document.getElementById('student-select').value;
    var semester = document.getElementById('semester-select').value;
    if(branch == "" || student == "" || semester == "" ) {
        clearTable();
        document.getElementById("error").innerHTML = "Please select all fields!";
        return;
    }
    var student;
    clearTable();
    
    for (var i = 0; i < studentList.length; i++) {
        if (branch == studentList[i].branch && studentId == studentList[i].id) {
            student = studentList[i];
            break;
        }
    }
    populateData(student);
}