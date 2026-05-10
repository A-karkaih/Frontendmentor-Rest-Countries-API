import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { ThemeProvider } from "./context/ThemeContext";
import { DetailPage } from "./pages/DetailPage";
import { ErrorPage } from "./pages/errors/ErrorPage";
import { RouteWrapper } from "./components/route/RouteWrapper";
export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<RouteWrapper />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/country/:name" element={<DetailPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
