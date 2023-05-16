import { Page3 } from "../Page3";
import { Routes, Route } from "react-router-dom";
import { UrlParameter } from "../UrlParameter";
export const Page3Router = () => {
  return (
    <Routes>
      <Route index element={<Page3 />} />
      <Route path="*" element={<UrlParameter />} />
    </Routes>
  );
};
