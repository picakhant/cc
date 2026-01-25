import { useGetClassList } from "../../react-query/class";
import { closeModal, modalIDs } from "../../util/modal";

const TeacherUploadMaterialForm = () => {
  const { data: rooms, isPending: fetchingClass } = useGetClassList();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {rooms?.list.length > 0 ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="mb-3 text-2xl text-center font-semibold">Upload your material</div>
          {/* file upload */}
          <div className="mb-3">
            <label
              className="flex flex-col justify-center items-center gap-3 border border-primary border-dashed p-5 rounded-xl"
              htmlFor="teacher-upload-file"
            >
              <div className="text-center font-semibold text-xl">
                Click for upload
              </div>
              <div className="text-center text-warning">
                Only .zip file allow.
              </div>
              <div className="btn btn-primary btn-sm">select file</div>
            </label>
            <input id="teacher-upload-file" className="hidden" type="file" />
          </div>
          {/* class list */}
          <div className="mb-3">
            <select
              // defaultValue="Pick a color"
              onChange={(e) => {
                console.log(e.target.value);
              }}
              className="select select-primary w-full"
            >
              <option value="" defaultChecked={true}>
                Pick a class
              </option>
              {rooms.list.map((c) => (
                <option value={c} key={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3 flex flex-col gap-3">
            <button className="btn btn-primary">Submit</button>
            <button className="btn ">Close</button>
          </div>
        </form>
      ) : (
        <div className="text-center">Please register class rooms!</div>
      )}
    </>
  );
};

export default TeacherUploadMaterialForm;
