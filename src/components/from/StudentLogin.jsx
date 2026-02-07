import React, { useState } from "react";
import { closeModal, modalIDs } from "../../util/modal";
import { useGetPublicClassList, useStudentLogin } from "../../react-query/auth";
import { useNavigate } from "react-router-dom";
import Alert from "../alert/Alert";

const StudentLogin = () => {
  const [rowNumber, setRowNumber] = useState("");
  const [username, setUsername] = useState("");
  const [classRoom, setClassRoom] = useState("");
  const [errMessage, setErrMessage] = useState("")
  const { data } = useGetPublicClassList();
  const { mutate } = useStudentLogin();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(
      { rowNumber, username, room: classRoom },
      {
        onSuccess: () => {
          closeModal(modalIDs.student_login);
          setClassRoom("");
          setRowNumber("");
          setUsername("");
          navigate("/dashboard/student");
        },
        onError: (err) => { 
          setErrMessage(err.response.data.message)
         }
      },
    );
  };
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="mb-4 text-2xl text-center">Login Here</div>
      <div className="mb-3">
        <input
          value={rowNumber}
          onChange={(e) => {
            setRowNumber(e.target.value);
          }}
          type="text"
          className="input input-secondary w-full input-lg"
          placeholder="RowNumber"
        />
      </div>
      <div className="mb-3">
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          className="input input-secondary w-full input-lg"
          placeholder="Username"
        />
      </div>
      <div className="mb-3">
        <select
          onChange={(e) => {
            setClassRoom(e.target.value);
          }}
          defaultValue={classRoom}
          className="select select-secondary w-full select-lg"
        >
          <option value={""}>Pick a class</option>
          {data?.list.map((c) => (
            <option value={c} key={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      {errMessage && <div className="">
        <Alert text={errMessage} type={"alert-error"}/>
      </div> }
      <div className="mb-3 flex flex-col gap-3">
        <button className="btn btn-secondary btn-lg">Login</button>
        <button
          onClick={() => {
            closeModal(modalIDs.student_login);
          }}
          className="btn btn-link btn-lg"
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default StudentLogin;
