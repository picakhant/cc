import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import QueryKeys from "./key";
import {
  addClass,
  deleteClass,
  getClassList,
  getStudentLists,
  registerStudents,
} from "../api/class";

export const useGetStudentList = (room) => {
  return useQuery({
    queryKey: [QueryKeys.get_student_list, room],
    queryFn: () => getStudentLists(room),
    enabled: !!room,
  });
};

export const useGetClassList = () => {
  return useQuery({
    queryKey: [QueryKeys.get_class_list],
    queryFn: getClassList,
  });
};

export const useAddClass = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ classRoom }) => addClass(classRoom),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.get_class_list] });
    },
  });
};

export const useDeleteClass = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ classRoom }) => deleteClass(classRoom),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.get_class_list] });
    },
  });
};

export const useRegisterStudents = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ classRoom, file }) => registerStudents(classRoom, file),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.get_student_list] });
    },
  });
};
