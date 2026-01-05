import { useMutation, useQuery } from "@tanstack/react-query";
import { teacherLogin, verifyIsLogin } from "../api/auth";

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
 }