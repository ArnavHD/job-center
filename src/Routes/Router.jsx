import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import NewsOutLooks from "../Components/NewsOutLooks/NewsOutLooks";
import SpecificCompany from "../Components/SpecificCompany/SpecificCompany";

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
    path: "categories/:id",
    loader: () => fetch("/companyData.json"),
    element: <SpecificCompany></SpecificCompany>,
  },
  {
    path: "/*",
    element: <div>Error </div>,
  },
]);

export default router;