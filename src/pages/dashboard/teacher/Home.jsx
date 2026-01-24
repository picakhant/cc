import ClassCard from "../../../components/card/ClassCard";
import { useGetClassList } from "../../../react-query/class";
import { modalIDs, openModal } from "../../../util/modal";

const Home = () => {
  const { data, isLoading } = useGetClassList();

  return (
    <div className="grid gap-2 grid-cols-12">
      {isLoading ? (
        <div className="col-span-12 h-screen flex flex-col justify-center items-center">
          <span className="loading text-primary loading-spinner loading-xl"></span>
        </div>
      ) : (
        data.list.map((c) => (
          <div className="col-span-2" key={c}>
            <ClassCard roomName={c} />
          </div>
        ))
      )}
      <div className="col-span-2 ">
        <div
          onClick={() => openModal(modalIDs.teacher_add_class)}
          className="border-2 border-dashed transition duration-200 ease-in-out  cursor-pointer select-none hover:bg-base-300 h-44 text-lg border-primary rounded-xl flex flex-col justify-center items-center"
        >
          Add
        </div>
      </div>
    </div>
  );
};

export default Home;
