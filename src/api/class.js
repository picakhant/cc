import instance from "../axios.config";

export const getClassList = async () => {
  try {
    const { data } = await instance.get("/teacher/class");
    return data;
  } catch (error) {
    throw error;
  }
};

export const addClass = async (classRoom) => {
  try {
    const { data } = await instance.post("/teacher/register-class", {
      classRoom,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteClass = async (classRoom) => {
  try {
    const { data } = await instance.delete("/teacher/class/" + classRoom);
    return data;
  } catch (error) {
    throw error;
  }
};

export const registerStudents = async (classRoom, file) => {
  try {
    const studentList = new FormData();
    studentList.append("teacherUpload", file);
    const { data } = await instance.post(
      "/teacher/register-student/" + classRoom,
      studentList,
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getStudentLists = async (classRoom) => {
  try {
    const { data } = await instance.get("/teacher/student-list/" + classRoom);
    return data;
  } catch (error) {
    throw error;
  }
};
