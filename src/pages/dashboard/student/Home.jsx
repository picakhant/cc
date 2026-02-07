import { useState } from "react";
import { useStudentGetTeacherMaterials } from "../../../react-query/material";
import { downloadMaterials } from "../../../api/material";

const Home = () => {
  const { data } = useStudentGetTeacherMaterials();

  const handleDownload = async (item) => {
    const res = await downloadMaterials(item);

    const blob = new Blob([res.data], {
      type: res.headers["content-type"],
    });

    const url = URL.createObjectURL(blob);
    console.log(url);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", item); // Use the filename 'f'
    document.body.appendChild(link);
    link.click();

    // 5. Cleanup
    link.parentNode.removeChild(link);
    window.URL.revokeObjectURL(url);
  };
  return (
    <div className="grid grid-cols-12 gap-3">
      {data?.list.map((item) => (
        <div
          onClick={async () => {
            await handleDownload(item);
          }}
          key={item}
          className="col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-1 "
        >
          <div className="flex flex-col items-center justify-center gap-2 p-2 hover:brightness-75 transition-all ease-linear cursor-pointer delay-150">
            <img src="/image/zip.png" alt="img" className="h-20" />
            <div className="text-lg">{item}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
