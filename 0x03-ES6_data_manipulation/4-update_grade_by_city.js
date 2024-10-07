export default function updateStudentGradeByCity(studentlist, city, grades) {
  const citystudents = studentlist.filter((a) => a.location === city);

  const gradestudents = citystudents.map(
    (student) => {
      for (const gradeInfo of grades) {
        if (studnet.id === gradeInfo.studentId) {
          student.grade = gradeInfo.grade;
        }
      }
      if (student.grade === undefined) {
        student.grade = 'N/A';
      }
      return student;
    },
  );

  return gradestudents;
}
