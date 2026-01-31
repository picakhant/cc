import React, { useEffect, useState } from "react";
import { modalIDs, openModal } from "../../../util/modal";
import SelectCalss from "../../../components/from/SelectCalss";
import { useClassStore } from "../../../store/useClassStore";

const StudentUpload = () => {
  const [room, setRoom] = useState();
    const { setFocusClass } = useClassStore();
  
    useEffect(() => {
      if (room) {
        setFocusClass(room);
      }
    }, [room]);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 flex justify-end gap-3">
        <div className="">
          <SelectCalss setRoom={setRoom} />
        </div>
        <button
          disabled={!room}
          onClick={() => {
            openModal(modalIDs.teacher_add_folder);
          }}
          className="btn btn-info"
        >
          Add Folder
        </button>
      </div>
    </div>
  );
};

export default StudentUpload;
