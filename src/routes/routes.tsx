import Layout from "@layout/Layout";
import Home from "@pages/home/Home";
import Immobili from "@pages/home/Immobili";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="immobili" element={<Immobili />} />
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>,
  ),
);
