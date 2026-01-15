import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
    },
    {
        path: "/auth",
        element: <div>This is authentication layout</div>
    },
    {
        path: "categories",
        element: <div>This is authentication layout</div>
    },
    {
        path: "/*",
        element: <div>Error </div>
    }
]);

export default router;