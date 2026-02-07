import React, { useState } from "react";
import { MdFolderZip } from "react-icons/md";
import Alert from "../../../components/alert/Alert";
import { RxCrossCircled } from "react-icons/rx";
import {
  useGetStudentFileUploadBucket,
  useStudentFileUpload,
} from "../../../react-query/material";
import toast from "react-hot-toast";

const UploadMaterials = () => {
  const [uploadFile, setUploadFile] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [folderName, setFolderName] = useState("");

  const { mutate } = useStudentFileUpload();
  const { data } = useGetStudentFileUploadBucket();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (uploadFile.type !== "application/zip") {
      setErrorMessage("Only zip file allowed!");
      return;
    }

    if (uploadFile.size > 3 * 1024 * 1024) {
      setErrorMessage("Max file size is 3MB!");
      return;
    }

    mutate(
      { file: uploadFile, folderName },
      {
        onSuccess: () => {
          setUploadFile(null);
          setFolderName("");
          toast.success("Material uploaded successfully");
        },
      },
    );
  };
  return (
    <div className="h-[90vh] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-full md:w-2/3 lg:w-1/3"
      >
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
                    Max file size 3MB
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
          <select
            defaultValue={folderName}
            onChange={(e) => {
              setFolderName(e.target.value);
            }}
            className="select select-primary w-full"
          >
            <option value="">Pick a bucket</option>
            {data?.list.map((bucket) => (
              <option key={bucket} value={bucket}>
                {bucket}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadMaterials;
