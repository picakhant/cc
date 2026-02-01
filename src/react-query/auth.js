import { useMutation, useQuery } from "@tanstack/react-query";
import { logout, teacherLogin, verifyIsLogin } from "../api/auth";

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
