export default function updateStudentGradeByCity(studentlist, city, grade) {
  const citystudents = studentlist.filter((a) => a.location === city);

  const gradeStudents = citystudents.map(
    (b) => {
      for (const gradeInfo of grades) {
        if (b.id === gradeInfo.studentId) {
          b.grade = gradeInfo.grade;
        }
      }
      if (b.grade === undefined) {
        b.grade = 'N/A';
      }
      return b;
    },
  );

  return gradeStudents;
}
