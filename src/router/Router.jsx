import { Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page1Router } from "./Page1Router";
import { Page2Router } from "./Page2Router";
import { Page404 } from "../NotFound";
import { Page3Router } from "./Page3Router";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="page1/*" element={<Page1Router />} />
      <Route path="page2/*" element={<Page2Router />} />
      <Route path="page3/*" element={<Page3Router />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
