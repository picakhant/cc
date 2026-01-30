import instance from "../axios.config";

export const teacherUplaodMaterial = async (room, file) => {
  try {
    const materialData = new FormData();
    materialData.append("material", file);
    const { data } = await instance.post(
      "/teacher/upload-material/" + room,
      materialData,
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getTeacherUploadedMaterials = async (room) => {
  try {
    const { data } = await instance.get(
      "/teacher/class/teacher-materials/" + room,
    );
    return data;
  } catch (error) {
    throw error;
  }
};
