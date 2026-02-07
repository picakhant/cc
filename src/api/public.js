import instance from "../axios.config";

export const getPublicClassList = async () => {
  try {
    const { data } = await instance.get("/public/classes");
    return data;
  } catch (error) {
    throw error;
  }
};
