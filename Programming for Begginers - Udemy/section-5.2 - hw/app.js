function getGrade(grade){
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
}

getGrade(100);
console.log('\n');
getGrade(80);
console.log('\n');
getGrade(59);