function getListStudentIds(student_list) {
  let id_list = [];
  if (student_list instanceof Array) {
    id_list = student_list.map((item) => item.id);
  }
  return id_list;
}

export default getListStudentIds;
