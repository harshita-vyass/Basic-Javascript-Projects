const columnList = [
    'Id',
    "Subject",
    'Marks',
    'Maximum Marks',
    'Result'
]

const data1 = [
    { id: 101, subject: 'English', marks: 40, maxMarks: 100 },
    { id: 102, subject: 'Physics', marks: 90, maxMarks: 100 },
    { id: 103, subject: 'Mathematics I', marks: 76, maxMarks: 100 },
    { id: 104, subject: 'Chemistry', marks: 39, maxMarks: 100 },
    { id: 105, subject: 'Computer Science', marks: 87, maxMarks: 100 },
];
const data2 = [
    { id: 201, subject: 'Mechanics', marks: 27, maxMarks: 100 },
    { id: 207, subject: 'Electronics', marks: 62, maxMarks: 100 },
    { id: 205, subject: 'Mathematics II', marks: 79, maxMarks: 100 },
];
const data3 = [
    { id: 311, subject: 'Software Engineering', marks: 74, maxMarks: 100 },
    { id: 308, subject: 'Data Structures and Algorithms', marks: 92, maxMarks: 100 },
    { id: 301, subject: 'Digital Image Processing', marks: 59, maxMarks: 100 }
];

const data4 = [
    { id: 101, subject: 'English', marks: 59, maxMarks: 100 },
    { id: 102, subject: 'Physics', marks: 60, maxMarks: 100 },
    { id: 103, subject: 'Mathematics I', marks: 70, maxMarks: 100 },
    { id: 104, subject: 'Chemistry', marks: 90, maxMarks: 100 },
    { id: 105, subject: 'Computer Science', marks: 30, maxMarks: 100 },
];
const data5 = [
    { id: 201, subject: 'Mechanics', marks: 78, maxMarks: 100 },
    { id: 207, subject: 'Electronics', marks: 86, maxMarks: 100 },
    { id: 205, subject: 'Mathematics II', marks: 91, maxMarks: 100 },
];
const data6 = [
    { id: 311, subject: 'Software Engineering', marks: 67, maxMarks: 100 },
    { id: 308, subject: 'Data Structures and Algorithms', marks: 84, maxMarks: 100 },
    { id: 301, subject: 'Digital Image Processing', marks: 38, maxMarks: 100 }
];

const data7 = [
    { id: 101, subject: 'English', marks: 29, maxMarks: 100 },
    { id: 102, subject: 'Physics', marks: 20, maxMarks: 100 },
    { id: 103, subject: 'Mathematics I', marks: 9, maxMarks: 100 },
    { id: 104, subject: 'Chemistry', marks: 60, maxMarks: 100 },
    { id: 105, subject: 'Computer Science', marks: 31, maxMarks: 100 },
];
const data8 = [
    { id: 241, subject: 'Fluid Dynamics', marks: 18, maxMarks: 100 },
    { id: 234, subject: 'Machinery', marks: 10, maxMarks: 100 },
    { id: 208, subject: 'Thermodynamics', marks: 43, maxMarks: 100 }
];


const semesterData11281 = [
    { id: 1, semester: 'I', value: data1},
    {id: 2, semester: 'II', value: data2},
    {id: 3, semester: 'III', value: data3}
]

const semesterData22311 = [
    { id: 1, semester: 'I', value: data4},
    {id: 2, semester: 'II', value: data5},
    {id: 3, semester: 'III', value: data6},
]

const semesterData32001 = [
    { id: 1, semester: 'I', value: data7},
    {id: 2, semester: 'II', value: data8}
]

const studentList = [
    { id: 11281, name: 'Jake Peralta', branch: 'CS', marksheet: semesterData11281 },
    { id: 22311, name: 'Rosa Diaz', branch: 'IT', marksheet: semesterData22311 },
    { id: 32001, name: 'Phill Dunphy', branch: 'ME', marksheet: semesterData32001 }
]

const branchMap = {
    CS: 'Computer Science',
    IT: 'Information Technology',
    ME: 'Mechanical'
}

