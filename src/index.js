import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";

let root = document.getElementById("root");
createRoot(root).render(<App />);
