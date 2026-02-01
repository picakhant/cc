import React, { useEffect, useState } from "react";
import { randomImage } from "../../util/randomImg";
import { modalIDs, openModal } from "../../util/modal";
import { useClassStore } from "../../store/useClassStore";
import { useGetStudentList } from "../../react-query/class";

const ClassCard = ({ roomName }) => {
  const [image, setImage] = useState();

  const { setFocusClass } = useClassStore();
  const { data, isLoading } = useGetStudentList(roomName);

  console.log(data);

  useEffect(() => {
    setImage(randomImage());
  }, []);
  return (
    <div className="card h-44 w-full transition duration-200 ease-in-out brightness-150 hover:brightness-125 image-full shadow-sm">
      <figure>
        <img src={image} className="w-full h-44  object-cover" alt="class" />
      </figure>
      <div className="card-body text-center flex-col justify-center items-center">
        <div className="flex flex-col gap-1  rounded-xl justify-center items-center">
          <div className="text-xl font-semibold">{roomName}</div>
          {isLoading ? (
            <div className="text-lg">Loading...</div>
          ) : (
            <div className="text-lg">Students {data?.list.length}</div>
          )}
          <div className="flex justify-center gap-2">
            <button
              onClick={() => {
                openModal(modalIDs.teacher_register_students);
                setFocusClass(roomName);
              }}
              className="btn btn-sm btn-primary"
            >
              student
            </button>
            <button
              onClick={() => {
                openModal(modalIDs.teacher_delete_class);
                setFocusClass(roomName);
              }}
              className="btn btn-sm btn-error"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
