import { useState } from "react";
import { closeModal, modalIDs, openModal } from "../util/modal";
import { useTeacherLogin } from "../react-query/auth";
import { useNavigate } from "react-router-dom";
import { useManualStore } from "../store/useManualStore";

const TeacherLoginForm = () => {
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const {setFocusManual} = useManualStore();

  const { mutate: login, isPending } = useTeacherLogin();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(
      { password },
      {
        onSuccess: (s) => {
          closeModal(modalIDs.teacher_login);
          navigate("/dashboard/" + s.role.toLowerCase());
        },
        onError: (e) => setErrMessage(e.response.data.message),
      },
    );
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h1 className="text-xl text-center">Login here</h1>
      <div className="mb-3">
        <input
          value={password}
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
            setErrMessage("");
          }}
          className="input input-lg input-primary w-full"
          placeholder="Enter your password..."
          disabled={isPending}
        />
      </div>
      {errMessage && <div className="text-error">{errMessage}</div>}
      <button type="button" onClick={() => { 
        setFocusManual("set-passkey.md")
        openModal(modalIDs.teacher_manual)
       }} className="btn btn-lg btn-info w-full">
        Click before login!
      </button>
      <button
        disabled={isPending}
        type="submit"
        className="btn btn-lg btn-primary w-full"
      >
        Login
      </button>
      <button
        disabled={isPending}
        onClick={() => {
          closeModal(modalIDs.teacher_login);
        }}
        type="button"
        className="btn btn-lg btn-link"
      >
        close
      </button>
    </form>
  );
};

export default TeacherLoginForm;
