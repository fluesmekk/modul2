// Student score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59



function calculateGrade (userScore, gradeRatio) {
    var studentGrade;
    var percentage = userScore * gradeRatio;
    switch(true) {
        case percentage > 0 && percentage < 59:
            studentGrade = 'F';
            break;
        case percentage > 60 && percentage < 69:
            studentGrade = 'D';
            break;
        case percentage > 70 && percentage < 79:
            studentGrade = 'C';
            break;
            case percentage > 80 && percentage < 89:
            studentGrade = 'B';
            break;
            case percentage > 90 && percentage <= 100:
            studentGrade = 'A';
            break;
    }
    console.log(`Grade is ${studentGrade}`)
}