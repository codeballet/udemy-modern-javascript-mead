// students score, total possible score
// 15/20 -> You got a C (75%).
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalc = function (studentScore, totalScore) {
  if (typeof studentScore !== 'number' || typeof totalScore !== 'number') {
    throw Error('Please provide numbers only')
  }

  const percent = 100 * studentScore / totalScore
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



try {
  const result = gradeCalc(70, 100)
  console.log(result)
} catch (e) {
  console.log(e.message)
}