import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login.page";
import DashboardPage from "./pages/Dashboard.page";
import BuyServicePage from "./pages/BuyService.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/buy-service" element={<BuyServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
