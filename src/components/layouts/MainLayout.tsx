import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../common/Header";
import HeroSection from "../common/HeroSection";
import useAuthStore from "../../store/useAuthStore";

const MainLayout = () => {
  const { isLoggedIn } = useAuthStore();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      navigate(isLoggedIn ? "/insurance-choice" : "/register");
    } else if (!isLoggedIn) {
      navigate("/register");
    }
  }, [pathname, isLoggedIn, navigate]);

  return (
    <div className="relative">
      <div className="container">
        <Header />
        <main className="px-4 lg:px-0 h-[calc(100dvh-4.5rem)] lg:h-[calc(100dvh-6.5rem)] flex flex-col justify-between lg:flex-row">
          <div className="lg:flex-1">
            <Outlet />
          </div>
          <div className="lg:flex-1">
            <HeroSection />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
