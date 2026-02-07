import { useUserLogout } from "../../react-query/auth";
import { closeModal, modalIDs } from "../../util/modal";
import { useNavigate } from "react-router-dom";

const LogoutForm = ({modalId}) => {
  const { mutate } = useUserLogout();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(undefined, {
      onSuccess: () => {
        navigate("/");
      },
    });
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="mb-3 text-center font-semibold text-lg">
        Are you sure want to logout?
      </div>
      <div className="flex justify-center gap-3">
        <button
          type="button"
          onClick={() => {
            closeModal(modalId);
          }}
          className="btn"
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-error">
          Logout
        </button>
      </div>
    </form>
  );
};

export default LogoutForm;
