import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import DashboardLayout from "../Dashboard/DashboardLayout/DashboardLayout";
import MedicalTable from "../Dashboard/DashboardPages/MedicalTable/MedicalTable";
import AddmissionTable from "../Dashboard/DashboardPages/AddmissionTable/AddmissionTable";
import PopulationTable from "../Dashboard/DashboardPages/PopulationTable/PopulationTable";
import UserTable from "../Dashboard/DashboardPages/UserTable/UserTable";



export const router = createBrowserRouter([
    {
      path: "/",
    //   element: <Layout></Layout>,
        element: <DashboardLayout></DashboardLayout>,children: [
            {
                path: 'admissionTable',
                element: <AddmissionTable></AddmissionTable>
            },

            {
                path: 'medicalTable',
                element: <MedicalTable></MedicalTable>
            },
            {
                path: 'populationTable',
                element: <PopulationTable></PopulationTable>
            },
            {
                path: 'userTable',
                element:<UserTable></UserTable>
            },
        ]
    //   children: [
    //     {
    //         path: '/', 
    //         element: <Home></Home>
    //     }
    //   ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: 'admissionTable',
                element: <AddmissionTable></AddmissionTable>
            },

            {
                path: 'medicalTable',
                element: <MedicalTable></MedicalTable>
            },
            {
                path: 'populationTable',
                element: <PopulationTable></PopulationTable>
            },
            {
                path: 'userTable',
                element:<UserTable></UserTable>
            },
        ]
    }
  ]);