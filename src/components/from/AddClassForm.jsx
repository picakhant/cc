import React, { useState } from "react";
import { closeModal, modalIDs } from "../../util/modal";
import { useAddClass } from "../../react-query/class";

const AddClassForm = () => {
  const [classRoom, setClassRoom] = useState("");
  const { mutate: addClass, isPending } = useAddClass();
  const handleSubmit = (e) => {
    e.preventDefault();
    addClass(
      { classRoom },
      {
        onSuccess: () => {
          setClassRoom("");
          closeModal(modalIDs.teacher_add_class);
        },
      },
    );
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="mb-3 text-center font-semibold text-xl">
        Add Class Here
      </div>
      <div className="mb-3">
        <input
          disabled={isPending}
          value={classRoom}
          onChange={(e) => setClassRoom(e.target.value)}
          placeholder="Enter calss name..."
          type="text"
          className="input input-lg input-primary w-full"
        />
      </div>
      <div className="mb-3 flex flex-col gap-3">
        <button disabled={isPending} className="btn btn-primary">
          Submit
        </button>
        <button
          disabled={isPending}
          onClick={() => closeModal(modalIDs.teacher_add_class)}
          type="button"
          className="btn "
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddClassForm;
