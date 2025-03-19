import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MantineProvider, Notification } from "@mantine/core";
import "@mantine/core/styles.css";
import { theme } from "./constants/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <Notification />
      <App />
    </MantineProvider>
  </StrictMode>
);
