import React from "react";
import Modal from "../Modal";
import { modalIDs } from "../../util/modal";
import AddClassForm from "../from/AddClassForm";

const TeacherModalContainer = () => {
  return (
    <>
      <Modal id={modalIDs.teacher_add_class}>
        <AddClassForm />
      </Modal>
    </>
  );
};

export default TeacherModalContainer;
