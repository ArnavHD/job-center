import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import NewsOutLooks from "../Components/NewsOutLooks/NewsOutLooks";
import SpecificCompany from "../Components/SpecificCompany/SpecificCompany";
import SingleJob from "../Pages/SingleJob";
import DetailedSinglePage from "../Pages/DetailedSinglePage";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("/companyData.json"),
    element: <HomeLayout></HomeLayout>,
    children: [
      //   {
      //     path: "categories/:id",
      //     loader: () => fetch("/companyData.json"),
      //     element: <NewsOutLooks></NewsOutLooks>,
      //   },
    ],
  },
  {
    path: "/auth",
    element: <div>This is authentication layout</div>,
  },
  {
    path: "categories/:companyId",
    loader: () => fetch("/companyData.json"),
    element: <SpecificCompany></SpecificCompany>,
  },
  {
    path: "categories/:companyId/job/:jobId",
    loader: () => fetch("/companyData.json"),
    element: <DetailedSinglePage></DetailedSinglePage>,
  },
  {
    path: "/*",
    element: <div>Error </div>,
  },
]);

export default router;