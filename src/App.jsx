import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage";
import { ThemeProvider } from "./context/ThemeContext";
import { DetailPage } from "./pages/DetailPage";
import { ErrorPage } from "./pages/errors/ErrorPage";
export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
         <Route path="/country/:name" element={<DetailPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
