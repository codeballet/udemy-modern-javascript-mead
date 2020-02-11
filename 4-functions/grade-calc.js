// students score, total possible score
// 15/20 -> You got a C (75%).
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalc = function (studentScore, totalScore) {
  if (!studentScore || !totalScore) {
    return 'You must provide both the student score and the total possible score!'
  }

  let percent = 100 * studentScore / totalScore
  let letterGrade = ''

  if (percent >= 90) {
    letterGrade = 'A'
  } else if (percent >= 80) {
    letterGrade = 'B'
  } else if (percent >= 70) {
    letterGrade = 'C'
  } else if (percent >= 60) {
    letterGrade = 'D'
  } else {
    letterGrade = 'F'
  }

  return `You got an ${letterGrade} (${percent}%).`
}

let result = gradeCalc(13, 20)
console.log(result)