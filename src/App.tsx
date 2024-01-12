import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import UserRegistration from "./pages/UserRegistration";
import InsuranceLayout from "./components/layouts/InsuranceLayout";
import InsuranceChoice from "./pages/InsuranceChoice";
import VehicleChoice from "./pages/VehicleChoice";
import LastInsuranceCompanyChoice from "./pages/LastInsuranceCompanyChoice";
import DiscountPercentageChoice from "./pages/DiscountPercentageChoice";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/register" element={<UserRegistration />} />
        <Route path="/insurance-choice" element={<InsuranceChoice />} />
        <Route element={<InsuranceLayout />}>
          <Route path="/vehicle-choice" element={<VehicleChoice />} index />
          <Route
            path="/last-insurance-company-choice"
            element={<LastInsuranceCompanyChoice />}
          />
          <Route
            path="/discount-percentage-choice"
            element={<DiscountPercentageChoice />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
