import { useMutation, useQuery } from "@tanstack/react-query";
import { logout, studentLogin, teacherLogin, verifyIsLogin } from "../api/auth";
import QueryKeys from "./key";
import { getPublicClassList } from "../api/public";

export const useUserLogout = () => {
  return useMutation({
    mutationFn: logout,
  });
};

export const useTeacherLogin = () => {
  return useMutation({
    mutationFn: ({ password }) => teacherLogin(password),
  });
};

export const userVerifyIsLogin = () => {
  return useQuery({
    queryKey: ["verify-user-login"],
    queryFn: verifyIsLogin,
  });
};

export const useGetPublicClassList = () => {
  return useQuery({
    queryKey: [QueryKeys.get_public_class],
    queryFn: getPublicClassList,
  });
};

export const useStudentLogin = () => {
  return useMutation({
    mutationFn: ({ room, rowNumber, username }) =>
      studentLogin(room, rowNumber, username),
  });
};
