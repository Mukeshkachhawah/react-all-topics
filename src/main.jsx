import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import UseMyCustomHook from "./Custom-Hooks/UseMyCustomHook";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseMyCustomHook />
  </StrictMode>
);
