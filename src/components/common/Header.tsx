import { Link } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";

const Header = () => {
  const { firstName, lastName, isLoggedIn } = useAuthStore();
  return (
    <header className="relative flex items-center justify-between px-10 py-6 lg:px-4 lg:py-10">
      <img src="/assets/svg/logo.svg" />
      <h1 className="absolute hidden translate-x-1/2 translate-y-1/2 bottom-1/2 right-1/2 lg:block lg:font-semibold">
        سامانه مقایسه و خرید آنلاین بیمه
      </h1>
      {isLoggedIn ? (
        <div className="flex items-center gap-1.5">
          <img src="/assets/svg/user.svg" className="size-6" />
          {firstName} {lastName}
        </div>
      ) : (
        <Link to="/register">ثبت نام</Link>
      )}
    </header>
  );
};

export default Header;
