import { FaHome } from "react-icons/fa";
import { FaBoxArchive, FaFileZipper } from "react-icons/fa6";

export const teacherSideBarItems = [
  { name: "Home", path: "/dashboard/teacher", icon: <FaHome /> },
  {
    name: "Material",
    path: "/dashboard/teacher/material",
    icon: <FaFileZipper />,
  },
  {
    name: "Student Uploads",
    path: "/dashboard/teacher/student-uploads",
    icon: <FaBoxArchive />,
  },
];
