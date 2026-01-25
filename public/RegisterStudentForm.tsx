import { useState, type FormEvent } from "react";
import { modalId, closeModal, openModal } from "../../util/modal";
import { useRegisterStudents } from "../../react-query/student.query";
import { FcFile } from "react-icons/fc";
import Alert from "../Alert";
import { MdInfo } from "react-icons/md";
import toast from "react-hot-toast";
import ClassOptions from "../ClassOptions";

const RegisterStudentForm = () => {
  const [file, setFile] = useState<File>();
  const [room, setRoom] = useState("");

  const { mutate, isPending } = useRegisterStudents();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(
      { file: file!, className: room },
      {
        onSuccess: () => {
          closeModal(modalId.register_students);
          setFile(undefined);
          toast.success("Register succeess");
        },
        onError: () => {
          closeModal(modalId.register_students);
          setFile(undefined);
          toast.error("Fial to register, try again!");
        },
      }
    );
  };
  return (
    <form onSubmit={handleSubmit} className="flex mt-5 flex-col gap-3">
      <div className="mb-3">
        <label
          className="w-full flex justify-center items-center rounded-lg h-30 border-dashed border-2 p-3 border-secondary"
          htmlFor="register-student-file-upload"
        >
          <div className="text-secondary text-lg font-semibold select-none">
            {file ? (
              <div className="flex flex-col gap-2 items-center justify-center">
                <FcFile className="text-5xl" />
                {file.name}
              </div>
            ) : (
              "Click for file upload!"
            )}
          </div>
        </label>
        <input
          disabled={isPending}
          id="register-student-file-upload"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      {!room && (
        <div className="mb-3">
          <Alert
            fontSize="text-lg"
            icon={<MdInfo className="text-xl" />}
            type="alert-info"
            soft
            desc="Only .txt file allow. Otherwise fail to register! ကျောင်းသား စာရင်း register ပုံစံအား see format ခလုတ်ကိုနှိပ်ကြည့်ပါ။"
          />
        </div>
      )}
      <div className="mb-3">
        <select
          disabled={isPending}
          onChange={(e) => setRoom(e.target.value)}
          className="select select-lg w-full select-secondary"
        >
          <option value="">Pick a class</option>
          <ClassOptions />
        </select>
      </div>
      <div className="flex flex-col gap-3">
        <button disabled={isPending} className="btn btn-secondary">
          Submit
        </button>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => openModal(modalId.student_register_doc)}
            className="btn btn-info"
          >
            See Format
          </button>
          <button
            type="button"
            onClick={() => closeModal(modalId.register_students)}
            className="btn btn-neutral"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterStudentForm;
