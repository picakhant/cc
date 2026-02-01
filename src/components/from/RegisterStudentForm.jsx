import { useRef, useState } from "react";
import { closeModal, modalIDs } from "../../util/modal";
import Alert from "../alert/Alert";
import { RxCrossCircled } from "react-icons/rx";
import { MdFileOpen } from "react-icons/md";
import { useRegisterStudents } from "../../react-query/class";
import { useClassStore } from "../../store/useClassStore";

const RegisterStudentForm = () => {
  const [uploadFile, setUploadFile] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const fileInputRef = useRef();

  const { mutate } = useRegisterStudents();
  const { focusClass } = useClassStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (uploadFile.type !== "text/plain") {
      setErrorMessage("Only text file allowed!");
      return;
    }

    mutate(
      { classRoom: focusClass, file: uploadFile },
      {
        onSuccess: () => {
          setUploadFile(undefined);
          setErrorMessage("");
          fileInputRef.current.value = "";
          closeModal(modalIDs.teacher_register_students);
        },
      },
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="mb-3 text-2xl text-center font-semibold">
          Upload your material
        </div>
        {/* file upload */}
        <div className="mb-3">
          <label
            className="flex flex-col justify-center items-center gap-3 border border-primary border-dashed p-5 rounded-xl"
            htmlFor="teacher-register-students-file-input"
          >
            {uploadFile ? (
              <div className="">
                <MdFileOpen className="text-6xl text-warning font-semibold" />
                <div className="text-center text-lg">{uploadFile.name} </div>
              </div>
            ) : (
              <>
                <div className="text-center font-semibold text-xl">
                  Click for upload
                </div>
                <div className="text-center text-lg text-warning">
                  Only .txt file allow
                </div>
              </>
            )}
            <div className="btn btn-primary btn-sm">
              {uploadFile ? "reselect" : "select file"}
            </div>
          </label>
          <input
            ref={fileInputRef}
            onChange={(e) => {
              setErrorMessage("");
              setUploadFile(e.target.files[0]);
              console.log("file is changed");
            }}
            id="teacher-register-students-file-input"
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

        <div className="mb-3 flex flex-col gap-3">
          <button
            type="submit"
            disabled={!uploadFile}
            className="btn btn-primary"
          >
            Submit
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => {
              closeModal(modalIDs.teacher_register_students);
            }}
          >
            Close
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterStudentForm;
