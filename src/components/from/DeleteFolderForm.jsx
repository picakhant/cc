import React, { useState } from "react";
import { useTeacherDeleteFolder } from "../../react-query/material";
import { useClassStore } from "../../store/useClassStore";
import { closeModal, modalIDs } from "../../util/modal";
import Alert from "../alert/Alert";

const DeleteFolderForm = () => {
  const [folderName, setFolderName] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const { focusClass } = useClassStore();
  const { mutate, isPending } = useTeacherDeleteFolder();
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(
      { folderName, room: focusClass },
      {
        onSuccess: () => {
          setFolderName("");
          closeModal(modalIDs.teacher_delete_folder);
        },
        onError: (err) => {
          setErrorMessage(err.response.data.message);
        },
      },
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 text-center text-error text-xl font-semibold">
        Delete Folder
      </div>
      <div className="mb-3">
        <input
          onChange={(e) => {
            setErrorMessage("");
            setFolderName(e.target.value);
          }}
          disabled={isPending}
          value={folderName}
          type="text"
          className="input input-error w-full"
        />
      </div>
      {errorMessage && (
        <div className="mb-3">
          <Alert type={"alert-error"} isSoft text={errorMessage} />
        </div>
      )}
      <div className="mb-3 flex flex-col gap-3">
        <button disabled={isPending || !folderName} className="btn btn-error">
          Delete
        </button>
        <button
        type="button"
          onClick={() => {
            closeModal(modalIDs.teacher_delete_folder);
            setFolderName("")
          }}
          disabled={isPending}
          className="btn"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default DeleteFolderForm;
