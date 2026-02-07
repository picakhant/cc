import { useQuery } from "@tanstack/react-query";
import QueryKeys from "./key";
import { getPublicClassList } from "../api/public";

export const useGetPublicClassList = () => {
  return useQuery({
    queryKey: [QueryKeys.get_public_class_list],
    queryFn: getPublicClassList,
  });
};
