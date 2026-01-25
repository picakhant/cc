import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import QueryKeys from "./key";
import { addClass, deleteClass, getClassList } from "../api/class";

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
