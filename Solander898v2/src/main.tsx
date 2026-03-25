
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  console.log("Versión nueva: " + Date.now());
  createRoot(document.getElementById("root")!).render(<App />);
