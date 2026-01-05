import Modal from "../components/Modal";
import TeacherLoginForm from "../components/TeacherLoginForm";
import { openModal } from "../util/modal";

const Landing = () => {
  return (
    <div>
      <button
        onClick={() => {
          openModal("login-modal");
        }}
        className="btn btn-primary"
      >
        Login
      </button>

      <button
        onClick={() => {
          openModal("signup-modal");
        }}
        className="btn btn-success"
      >
        sign up
      </button>

      <Modal id={"login-modal"}>
        <TeacherLoginForm />
      </Modal>
      <Modal id={"signup-modal"}>
        <h1>Sign up</h1>
      </Modal>
    </div>
  );
};

export default Landing;
