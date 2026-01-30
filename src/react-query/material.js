import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getTeacherUploadedMaterials,
  teacherUplaodMaterial,
} from "../api/material";
import QueryKeys from "./key";

export const useTeacherUploadMaterial = () => {
  return useMutation({
    mutationFn: ({ room, file }) => teacherUplaodMaterial(room, file),
  });
};

export const useGetTeacherUploadedMaterials = (room) => {
  return useQuery({
    queryKey: [QueryKeys.get_teacher_uploaded_list, room],
    queryFn: () => getTeacherUploadedMaterials(room),
    enabled: !!room,
  });
};
