import React from "react";
import { useGetClassList } from "../../react-query/class";

const SelectCalss = ({ setRoom }) => {
  const { data: rooms, isLoading: fetchingClass } = useGetClassList();

  return (
    <>
      {fetchingClass ? (
        <div className="">Loading...</div>
      ) : (
        <select
          // defaultValue="Pick a color"
          onChange={(e) => {
            setRoom(e.target.value);
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
      )}
    </>
  );
};

export default SelectCalss;
