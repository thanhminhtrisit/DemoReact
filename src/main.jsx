import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StudentManagement from "./StudentManagement.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StudentManagement />
  </StrictMode>
);
