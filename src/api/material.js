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

export const deleteTeacherMaterial = async (room, fileName) => {
  try {
    const { data } = await instance.delete(
      `/teacher/class/teacher-materials/${room}?fileName=${fileName}`,
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const addFolder = async (folderName, room) => {
  try {
    const { data } = await instance.post(
      `/teacher/add-student-upload-dir/${room}`,
      { folderName },
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getStudentFileBucketList = async (room) => {
  try {
    const { data } = await instance.get(`/teacher/student-upload-dir/${room}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deletStudentFileBucket = async (room, folderName) => {
  try {
    const { data } = await instance.delete(
      `/teacher/student-upload-bucket/${room}?folderName=${folderName}`,
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const studentGetTeacherMaterials = async () => {
  try {
    const { data } = await instance.get("/student/teacher-uploads");
    return data;
  } catch (error) {
    throw error;
  }
};

export const studentUplaodMaterial = async (folderName, file) => {
  try {
    const materialData = new FormData();
    materialData.append("studentUpload", file);
    const { data } = await instance.post(
      "/student/upload-material?folderName=" + folderName,
      materialData,
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getStudentFileUploadBucket = async () => {
  try {
    const { data } = await instance.get("/student/upload-bucket");
    return data;
  } catch (error) {
    throw error;
  }
};

export const downloadMaterials = async (name) => {
   try {
     const res = await instance.get("/student/download?file="+ name);
     return res;
   } catch (error) {
     throw error;
   }
}