import { useState } from "react";
import { useGetClassList } from "../../react-query/class";
import { closeModal, modalIDs } from "../../util/modal";
import Alert from "../alert/Alert";
import { RxCrossCircled } from "react-icons/rx";
import { MdFolderZip } from "react-icons/md";
import { useTeacherUploadMaterial } from "../../react-query/material";
import SelectCalss from "./SelectCalss";

const TeacherUploadMaterialForm = () => {
  const [room, setRoom] = useState("");
  const [uploadFile, setUploadFile] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const { data: rooms, isLoading: fetchingClass } = useGetClassList();
  const { mutate } = useTeacherUploadMaterial();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (uploadFile.type !== "application/zip") {
      setErrorMessage("Only zip file allowed!");
      return;
    }

    if (uploadFile.size > 10 * 1024 * 1024) {
      setErrorMessage("Max file size is 10MB!");
      return;
    }

    mutate(
      { room, file: uploadFile },
      {
        onSuccess: () => {
          setRoom("");
          setUploadFile("");
          setErrorMessage("");
          closeModal(modalIDs.teacher_upload_material);
        },
      },
    );
  };

  return (
    <>
      {rooms?.list.length > 0 ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="mb-3 text-2xl text-center font-semibold">
            Upload your material
          </div>
          {/* file upload */}
          <div className="mb-3">
            <label
              className="flex flex-col justify-center items-center gap-3 border border-primary border-dashed p-5 rounded-xl"
              htmlFor="teacher-upload-file"
            >
              {uploadFile ? (
                <div className="">
                  <MdFolderZip className="text-6xl text-warning font-semibold" />
                  <div className="text-center text-lg">{uploadFile.name} </div>
                </div>
              ) : (
                <>
                  <div className="text-center font-semibold text-xl">
                    Click for upload
                  </div>
                  <div className="flex flex-col">
                    <div className="text-center text-lg text-warning">
                      Only .zip file allow
                    </div>
                    <div className="text-center text-error">
                      Max file size 10MB
                    </div>
                  </div>
                </>
              )}
              <div className="btn btn-primary btn-sm">
                {uploadFile ? "reselect" : "select file"}
              </div>
            </label>
            <input
              onChange={(e) => {
                setErrorMessage("");
                setUploadFile(e.target.files[0]);
              }}
              id="teacher-upload-file"
              className="hidden"
              type="file"
            />
          </div>

          {errorMessage && (
            <div className="mb-3">
              <Alert
                type={"alert-error"}
                text={errorMessage}
                icon={<RxCrossCircled className="text-xl" />}
              />
            </div>
          )}

          <div className="mb-3">
            <SelectCalss setRoom={setRoom} />
          </div>
          <div className="mb-3 flex flex-col gap-3">
            <button
              type="submit"
              disabled={!room || !uploadFile}
              className="btn btn-primary"
            >
              Submit
            </button>
            <button
              className="btn"
              onClick={() => {
                closeModal(modalIDs.teacher_upload_material);
              }}
            >
              Close
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center">Please register class rooms!</div>
      )}
    </>
  );
};

export default TeacherUploadMaterialForm;
