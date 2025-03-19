import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import DashboardLayout from "./layout/layout";
import DashboardPage from "./pages/DashboardPage";
import ProductManagementPage from "./pages/productManagementPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route
            path="product-management"
            element={<ProductManagementPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
}
