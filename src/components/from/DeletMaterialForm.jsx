import React, { useState } from "react";
import { closeModal, modalIDs } from "../../util/modal";
import { useDeleteTeacherUploadMaterial } from "../../react-query/material";
import { useClassStore } from "../../store/useClassStore";
import Alert from "../alert/Alert";

const DeletMaterialForm = () => {
  const [fileName, setFileName] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const { focusClass, removeFocusClass } = useClassStore();
  const { mutate: deleteFile, isPending } = useDeleteTeacherUploadMaterial();
  const handleSubmit = (e) => {
    e.preventDefault();
    deleteFile(
      { room: focusClass, fileName },
      {
        onSuccess: () => {
          removeFocusClass();
          setFileName("");
          closeModal(modalIDs.teacher_delete_material);
        },
        onError: (e) => {
          setErrMessage(e.response.data.message);
        },
      },
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5 select-none text-center font-semibold text-xl">
        Delete File Here
      </div>
      <div className="mb-3">
        <input
          value={fileName}
          onChange={(e) => {
            setErrMessage("")
            setFileName(e.target.value);
          }}
          disabled={isPending}
          placeholder="Enter your file name..."
          type="text"
          className="input input-primary w-full"
        />
      </div>
      {errMessage && <div className="mb-3">
        <Alert text={errMessage} type={"alert-error"} isSoft={true}/>
      </div> }
      <div className="mb-3 flex flex-col gap-3">
        <button
          type="submit"
          disabled={!fileName | isPending}
          className="btn btn-error"
        >
          Delete
        </button>
        <button
          type="button"
          onClick={() => {
            closeModal(modalIDs.teacher_delete_material);
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

export default DeletMaterialForm;
