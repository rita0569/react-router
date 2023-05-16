import { Page2 } from "../Page2";
import { Routes, Route } from "react-router-dom";
import { Page2Detail1 } from "../Page2Detail1";
import { Page2Detail2 } from "../Page2Detail2";
import { Page404 } from "../NotFound";
export const Page2Router = () => {
  return (
    <Routes>
      <Route index element={<Page2 />} />
      <Route path="detail1" element={<Page2Detail1 />} />
      <Route path="detail2" element={<Page2Detail2 />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
