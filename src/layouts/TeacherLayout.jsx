import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Sidebar from "../components/teacher/Sidebar";
import { IoLogOutOutline } from "react-icons/io5";
import TeacherModalContainer from "../components/teacher/TeacherModalContainer";
import { modalIDs, openModal } from "../util/modal";
import { useManualStore } from "../store/useManualStore";
import { teacherSideBarItems } from "../util/sidebar";

const TeacherLayout = () => {
  const { user } = useAuthContext();
  const { setFocusManual } = useManualStore();

  if (user.role !== "TEACHER") {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="px-4 flex items-center gap-2">
              Teacher Dashboard
            </div>
            <div className="flex items-center ms-auto gap-2">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-info m-1">
                  User Manual
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content gap-3 menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <div
                      onClick={() => {
                        setFocusManual("class.md");
                        openModal(modalIDs.teacher_manual);
                      }}
                    >
                      How to manage class?
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => {
                        setFocusManual("register-student.md");
                        openModal(modalIDs.teacher_manual);
                      }}
                    >
                      How to register student?
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => {
                        setFocusManual("upload-material.md");
                        openModal(modalIDs.teacher_manual);
                      }}
                    >
                      How to upload materials?
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => {
                        setFocusManual("student-upload.md");
                        openModal(modalIDs.teacher_manual);
                      }}
                    >
                      How to create bucket?
                    </div>
                  </li>
                </ul>
              </div>

              <div
                onClick={() => {
                  openModal(modalIDs.teacher_logout);
                }}
                className="btn btn-error"
              >
                logout <IoLogOutOutline />
              </div>
            </div>
          </nav>
          {/* Page content here */}
          <div className="p-4">
            <Outlet />
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            {/* Sidebar content here */}
            <Sidebar sidebarItems={teacherSideBarItems} />
          </div>
        </div>
      </div>
      <TeacherModalContainer />
    </>
  );
};

export default TeacherLayout;
