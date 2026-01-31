import { MdDriveFolderUpload } from "react-icons/md";
import { modalIDs, openModal } from "../../../util/modal";
import SelectCalss from "../../../components/from/SelectCalss";
import { useEffect, useState } from "react";
import { useGetTeacherUploadedMaterials } from "../../../react-query/material";
import { FaTrashAlt } from "react-icons/fa";
import { useClassStore } from "../../../store/useClassStore";

const Material = () => {
  const [room, setRoom] = useState();
  const { setFocusClass } = useClassStore();

  useEffect(() => {
    if (room) {
      setFocusClass(room);
    }
  }, [room]);


  const { data, isLoading } = useGetTeacherUploadedMaterials(room);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <div className="flex gap-3 justify-end">
          <div className="">
            <SelectCalss setRoom={setRoom} />
          </div>
          <button
            onClick={() => openModal(modalIDs.teacher_upload_material)}
            className="btn btn-primary"
          >
            <MdDriveFolderUpload />
            Upload Material
          </button>
          <button
            onClick={() => {
              openModal(modalIDs.teacher_delete_material);
            }}
            disabled={!room}
            className="btn btn-error"
          >
            <FaTrashAlt />
            delete
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="col-span-12 h-screen flex flex-col justify-center items-center">
          loading...
        </div>
      ) : (
        data?.list.map((f) => {
          return (
            <div
              className="flex flex-col gap-2 justify-center items-center"
              key={f}
            >
              <img src={"/image/zip.png"} alt="img" className="h-20" />
              <div className="text-lg">{f}</div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Material;
