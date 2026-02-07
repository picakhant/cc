import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addFolder,
  deleteTeacherMaterial,
  deletStudentFileBucket,
  getStudentFileBucketList,
  getStudentFileUploadBucket,
  getTeacherUploadedMaterials,
  studentGetTeacherMaterials,
  studentUplaodMaterial,
  teacherUplaodMaterial,
} from "../api/material";
import QueryKeys from "./key";

export const useTeacherUploadMaterial = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ room, file }) => teacherUplaodMaterial(room, file),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.get_teacher_uploaded_list],
      });
    },
  });
};

export const useDeleteTeacherUploadMaterial = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ room, fileName }) => {
      return deleteTeacherMaterial(room, fileName);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.get_teacher_uploaded_list],
      });
    },
  });
};

export const useGetTeacherUploadedMaterials = (room) => {
  return useQuery({
    queryKey: [QueryKeys.get_teacher_uploaded_list, room],
    queryFn: () => getTeacherUploadedMaterials(room),
    enabled: !!room,
  });
};

export const useTeacherAddFolder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ folderName, room }) => {
      return addFolder(folderName, room);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.get_teacher_student_bucket_list],
      });
    },
  });
};

export const usegetStudentFileBucketList = (room) => {
  return useQuery({
    queryKey: [QueryKeys.get_teacher_student_bucket_list, room],
    queryFn: () => getStudentFileBucketList(room),
    enabled: !!room,
  });
};

export const useDeletStudentFileBucket = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ folderName, room }) => {
      return deletStudentFileBucket(room, folderName);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.get_teacher_student_bucket_list],
      });
    },
  });
};

export const useStudentGetTeacherMaterials = () => {
  return useQuery({
    queryKey: [QueryKeys.student_get_teacher_materials],
    queryFn: studentGetTeacherMaterials,
  });
};

export const useStudentFileUpload = () => {
  return useMutation({
    mutationFn: ({ folderName, file }) => {
      return studentUplaodMaterial(folderName, file);
    },
  });
};

export const useGetStudentFileUploadBucket = () => {
  return useQuery({
    queryKey: [QueryKeys.student_get_file_buckets],
    queryFn: getStudentFileUploadBucket,
  });
};