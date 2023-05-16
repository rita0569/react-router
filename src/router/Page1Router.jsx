import { Page1 } from "../Page1";
import { Routes, Route } from "react-router-dom";
import { Page1Detail1 } from "../Page1Detail1";
import { Page1Detail2 } from "../Page1Detail2";
import { Page404 } from "../NotFound";
export const Page1Router = () => {
  return (
    <Routes>
      <Route index element={<Page1 />} />
      <Route path="detail1" element={<Page1Detail1 />} />
      <Route path="detail2" element={<Page1Detail2 />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
