import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import NewsOutLooks from "../Components/NewsOutLooks/NewsOutLooks";
import SpecificCompany from "../Components/SpecificCompany/SpecificCompany";
import SingleJob from "../Pages/SingleJob";
import DetailedSinglePage from "../Pages/DetailedSinglePage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import PrivateRout from "../Provider/PrivateRout";
import Profile from "../Pages/Profile";
import UpdatePage from "../Pages/UpdatePage";
import NotFound from "../Pages/NotFound";
import Loading from "../Pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("/companyData.json"),
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "categories/:companyId",
    loader: () => fetch("/companyData.json"),
    element: (
      <PrivateRout>
        <SpecificCompany></SpecificCompany>
      </PrivateRout>
    ),
    hydrateFallbackElement: <Loading></Loading>
  },
  {
    path: "categories/:companyId/job/:jobId",
    loader: () => fetch("/companyData.json"),
    element: <DetailedSinglePage></DetailedSinglePage>,
    hydrateFallbackElement: <Loading></Loading>
  },
  {
    path: "/profile",
    element: <Profile></Profile>
  },
  {
    path:"/update-profile",
    element:<UpdatePage></UpdatePage>
  },
  {
    path: "/*",
    element: <NotFound></NotFound>,
  },
]);

export default router;