import React, { useEffect, useState } from "react";
import { modalIDs, openModal } from "../../../util/modal";
import SelectCalss from "../../../components/from/SelectCalss";
import { useClassStore } from "../../../store/useClassStore";
import { usegetStudentFileBucketList } from "../../../react-query/material";
import { useBucketStore } from "../../../store/useBucketStore";

const StudentUpload = () => {
  const [room, setRoom] = useState();
  const { setFocusClass, focusClass } = useClassStore();
  const { setFocusBucket } = useBucketStore();

  const { data, isLoading } = usegetStudentFileBucketList(room);

  useEffect(() => {
    if (room) {
      setFocusClass(room);
    }
  }, [room, focusClass]);
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

      {isLoading ? (
        <div className="col-span-12 h-screen flex flex-col justify-center items-center">
          loading...
        </div>
      ) : room ? (
        data?.list.length > 0 ? (
          data?.list.map((f) => {
            return (
              <div
                onClick={() => {
                  setFocusBucket(f);
                  openModal(modalIDs.teacher_delete_student_upload_bucket);
                }}
                className="flex flex-col gap-2 justify-center items-center"
                key={f}
              >
                <img src={"/image/folder.png"} alt="img" className="h-20" />
                <div className="text-lg">{f}</div>
              </div>
            );
          })
        ) : (
          <div className="h-screen col-span-12 flex flex-col justify-center items-center">
            <img src={"/image/error.gif"} alt="img" className="h-40" />
            <div className="text-2xl font-semibold">No Bucket in {room}</div>
          </div>
        )
      ) : (
        <div className="h-screen text-2xl col-span-12 flex flex-col justify-center items-center">
          Pick a room for actions!
        </div>
      )}
    </div>
  );
};

export default StudentUpload;
