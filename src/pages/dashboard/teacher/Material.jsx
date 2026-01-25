import { MdDriveFolderUpload } from "react-icons/md";
import { modalIDs, openModal } from "../../../util/modal";

const Material = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <div className="flex justify-end">
          <button
            onClick={() => openModal(modalIDs.teacher_upload_material)}
            className="btn btn-primary"
          >
            <MdDriveFolderUpload />
            Upload Material
          </button>
        </div>
      </div>
    </div>
  );
};

export default Material;
