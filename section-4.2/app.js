//student pass with 60 
var grade = 75;
var gradeChar = '';




if (grade >= 90 ) {
    gradeChar = 'A';
} else if (grade >= 80) {
    gradeChar = 'B';
}else if (grade >= 70) {
    gradeChar = 'C';
} else if (grade >= 60) {
    gradeChar = 'D';
} else {
    gradeChar = 'E';
}

console.log(grade + ' equals to ' + gradeChar);