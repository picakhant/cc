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
