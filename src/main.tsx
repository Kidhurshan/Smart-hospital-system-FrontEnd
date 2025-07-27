import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/swiper-bundle.css";
import "simplebar-react/dist/simplebar.min.css";
import "flatpickr/dist/flatpickr.css";
import App from "./App.tsx";
import { AppWrapper } from "./components/common_components/PageMeta.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { Provider } from "react-redux";
import store from "./store.tsx";
import { ToastContainer } from "react-toastify";
import { PatientProvider } from "./context/PatientContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AppWrapper>
        <Provider store={store}>
          <ToastContainer />
          <PatientProvider>
            <App />
          </PatientProvider>
        </Provider>
      </AppWrapper>
    </ThemeProvider>
  </StrictMode>
);
