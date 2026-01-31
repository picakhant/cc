import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import { AuthContextProvider } from "./context/AuthContext";
import TeacherHome from "./pages/dashboard/teacher/Home";
import StudentHome from "./pages/dashboard/student/Home";
import StudentLayout from "./layouts/StudentLayout";
import TeacherLayout from "./layouts/TeacherLayout";
import Material from "./pages/dashboard/teacher/Material";
import NotFound from "./pages/NotFound";
import StudentUpload from "./pages/dashboard/teacher/StudentUpload";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Landing />} />
        <Route
          path="/dashboard"
          element={
            <AuthContextProvider>
              <DashboardLayout />
            </AuthContextProvider>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="teacher" element={<TeacherLayout />}>
            <Route index element={<TeacherHome />} />
            <Route path="material" element={<Material />} />
            <Route path="student-uploads" element={<StudentUpload />} />
          </Route>
          <Route path="student" element={<StudentLayout />}>
            <Route index element={<StudentHome />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
