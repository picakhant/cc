import React, { useEffect, useState } from "react";
import { randomImage } from "../../util/randomImg";
import { modalIDs, openModal } from "../../util/modal";
import { useClassStore } from "../../store/useClassStore";

const ClassCard = ({ roomName }) => {
  const [image, setImage] = useState();

  const { setFocusClass } = useClassStore();

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
          <div className="text-lg">Students 30</div>
          <button
            onClick={() => {
              openModal(modalIDs.teacher_delete_class);
              setFocusClass(roomName)
            }}
            className="btn btn-sm"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
