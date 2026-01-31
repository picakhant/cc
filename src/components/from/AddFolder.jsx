import React, { useState } from "react";
import { closeModal, modalIDs } from "../../util/modal";
import { useClassStore } from "../../store/useClassStore";
import { useTeacherAddFolder } from "../../react-query/material";

const AddFolder = () => {
  const [folderName, setFolderName] = useState("");
  const { focusClass, removeFocusClass } = useClassStore();

  const { mutate: addFolder, isPending } = useTeacherAddFolder();
  const handleSubmit = (e) => {
    e.preventDefault();
    addFolder(
      { folderName, room: focusClass },
      {
        onSuccess: () => {
          setFolderName("");
          removeFocusClass();
          closeModal(modalIDs.teacher_add_folder);
        },
      },
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5 select-none text-center font-semibold text-xl">
        Add Folder Here
      </div>
      <div className="mb-3">
        <input
          value={folderName}
          onChange={(e) => {
            setFolderName(e.target.value);
          }}
          disabled={isPending}
          placeholder="Enter your folder name..."
          type="text"
          className="input input-primary w-full"
        />
      </div>

      <div className="mb-3 flex flex-col gap-3">
        <button
          type="submit"
          disabled={!folderName | isPending}
          className="btn btn-primary"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => {
            closeModal(modalIDs.teacher_add_folder);
          }}
          disabled={isPending}
          className="btn"
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default AddFolder;
