import React from "react";
import { modalIDs } from "../../util/modal";
import Modal from "../Modal";
import LogoutForm from "../from/LogoutForm";

const StudentModalContainer = () => {
  return (
    <>
      <Modal width={"w-[400px]"} id={modalIDs.sutdent_logout}>
        <LogoutForm modalId={modalIDs.sutdent_logout} />
      </Modal>
    </>
  );
};

export default StudentModalContainer;
