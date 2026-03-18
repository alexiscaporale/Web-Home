import { createBrowserRouter } from "react-router";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { BrandManual } from "./pages/BrandManual";
import { DocTemplates } from "./pages/DocTemplates";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "brand", Component: BrandManual },
      { path: "templates", Component: DocTemplates },
      { path: "*", Component: NotFound },
    ],
  },
]);
