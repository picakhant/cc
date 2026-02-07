import React from "react";
import { closeModal, modalIDs } from "../../util/modal";
import { useBucketStore } from "../../store/useBucketStore";
import { useDeletStudentFileBucket } from "../../react-query/material";
import { useClassStore } from "../../store/useClassStore";

const DeleteBucketForm = () => {
  const { focusBucket, removeFocusBucket } = useBucketStore();
  const { focusClass } = useClassStore();

  const { mutate } = useDeletStudentFileBucket();
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(
      { room: focusClass, folderName: focusBucket },
      {
        onSuccess: () => {
          closeModal(modalIDs.teacher_delete_student_upload_bucket);
          removeFocusBucket();
        },
      },
    );
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="text-xl text-center">
        Are you sure want to delete{" "}
        <span className="text-error font-semibold">{focusBucket}</span>?
      </div>
      <div className="flex gap-2 justify-center">
        <button type="submit" className="btn btn-error">
          Delete
        </button>
        <button
          onClick={() => {
            closeModal(modalIDs.teacher_delete_student_upload_bucket);
          }}
          type="button"
          className="btn"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default DeleteBucketForm;
