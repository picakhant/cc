import instance from "../axios.config";

export const verifyIsLogin = async () => {
  try {
    const res = await instance.get("/auth/verify-islogin");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const teacherLogin = async (password) => {
  try {
    const res = await instance.post("/auth/teacher-login", { password });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const studentLogin = async (room, rowNumber, username) => {
  try {
    const res = await instance.post("/auth/student-login/" + room, {
      rowNumber,
      username,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const res = await instance.post("/auth/logout");
    return res.data;
  } catch (error) {
    throw error;
  }
};
