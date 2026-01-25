import { useDeleteClass } from "../../react-query/class";
import { useClassStore } from "../../store/useClassStore";
import { closeModal, modalIDs } from "../../util/modal";

const DeleteClassForm = () => {
  const { focusClass, removeFocusClass } = useClassStore();

  const { mutate: deleteClass, isPending } = useDeleteClass();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(focusClass)
    deleteClass(
      { classRoom: focusClass },
      {
        onSuccess: () => {
          closeModal(modalIDs.teacher_delete_class);
          removeFocusClass();
        },
      },
    );
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="mb-3 text-lg">
        Are you sure want to delete{" "}
        <span className="font-semibold text-error">{focusClass}</span> ?
      </div>
      <div className="flex justify-center gap-3">
        <button
          type="button"
          disabled={isPending}
          onClick={() => {
            closeModal(modalIDs.teacher_delete_class);
            removeFocusClass();
          }}
          className="btn"
        >
          Cancel
        </button>
        <button disabled={isPending} className="btn btn-error">
          Delete
        </button>
      </div>
    </form>
  );
};

export default DeleteClassForm;
