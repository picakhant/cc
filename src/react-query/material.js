import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addFolder,
  deleteTeacherMaterial,
  getTeacherUploadedMaterials,
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
  });
};
