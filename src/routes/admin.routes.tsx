import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import AcademicDepertment from "../pages/admin/academicManagement/AcademicDepertment";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemister from "../pages/admin/academicManagement/AcademicSemister";
import CreateAcademicDepertment from "../pages/admin/academicManagement/CreateAcademicDepertment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemister from "../pages/admin/academicManagement/CreateAcademicSemister";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    path: "",
    children: [
      {
        name: "Create A. Semister",
        path: "create-academic-semister",
        element: <CreateAcademicSemister />,
      },
      {
        name: "Academic Semister",
        path: "academic-semister",
        element: <AcademicSemister />,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepertment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepertment />,
      },
    ],
  },
  {
    name: "User Management",
    path: "",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
    ],
  },
];
