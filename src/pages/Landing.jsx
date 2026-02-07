import React from "react";
import logo from "/image/logo.png";
import Modal from "../components/Modal";
import TeacherLoginForm from "../components/TeacherLoginForm";
import { modalIDs, openModal } from "../util/modal";
import StudentLogin from "../components/from/StudentLogin";

const Landing = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img src={logo} className="h-80 mx-auto" alt="image" />
          <h1 className="text-5xl font-bold">PeerSync</h1>
          <p className="py-6 text-xl">
            File transfer via local area network between teacher and students.
            Smart tutor, smart student and smart choice
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => openModal(modalIDs.teacher_login)}
              className="btn btn-primary btn-lg"
            >
              Techaer Portal
            </button>
            <button
              onClick={() => openModal(modalIDs.student_login)}
              className="btn btn-secondary btn-lg"
            >
              Student Portal
            </button>
          </div>
        </div>
      </div>
      <Modal id={modalIDs.teacher_login}>
        <TeacherLoginForm />
      </Modal>
      <Modal id={modalIDs.student_login}>
        <StudentLogin />
      </Modal>
    </div>
  );
};

export default Landing;
