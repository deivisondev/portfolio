import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
