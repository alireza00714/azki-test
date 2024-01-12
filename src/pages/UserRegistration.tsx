import { useState } from "react";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import useAuthStore from "../store/useAuthStore";
import isPersianString from "../utils/functions/isPersianString";
import useDebounce from "../utils/hooks/useDebounce";
import isValidIranianPhoneNumber from "../utils/functions/isValidIranianPhoneNumber";
import enToFaNumStr from "../utils/functions/enToFaNumStr";
import faToEnNumStr from "../utils/functions/faToEnNumStr";
import { useNavigate } from "react-router-dom";

type TPasswordError = {
  minLength: boolean;
  maxLength: boolean;
  lowercase: boolean;
  uppercase: boolean;
};

const errorMessages: Record<keyof TPasswordError, string> = {
  minLength: "رمز عبور باید حداقل ۴ حرف داشته باشد",
  lowercase: "رمز عبور باید شامل حداقل یک حرف کوچک انگلیسی باشد",
  uppercase: "رمز عبور باید شامل حداقل یک حرف بزرگ انگلیسی باشد",
  maxLength: "رمز عبور باید حداکثر ۱۰ حرف داشته باشد",
};

const UserRegistration = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const {
    firstName,
    lastName,
    phoneNumber,
    updateFirstName,
    updateLastName,
    updatePhoneNumber,
    login,
  } = useAuthStore();
  const debouncedPhoneNumber = useDebounce(phoneNumber, 300);

  const validatePassword = (password: string) => {
    let error = "";
    if (password.length < 4) {
      error = errorMessages.minLength;
    } else if (password.length > 10) {
      error = errorMessages.maxLength;
    } else if (!/[a-z]/.test(password)) {
      error = errorMessages.lowercase;
    } else if (!/[A-Z]/.test(password)) {
      error = errorMessages.uppercase;
    }
    setPasswordError(error);
  };

  const isRegisterButtonDisabled =
    !isPersianString(firstName) ||
    !isPersianString(lastName) ||
    !isValidIranianPhoneNumber(phoneNumber) ||
    passwordError !== "";

  return (
    <div className="flex flex-col gap-4 lg:gap-10 lg:px-20 lg:mt-10">
      <h2 className="text-base font-medium text-center lg:text-right lg:text-3xl">
        ثبت نام
      </h2>
      <div className="flex flex-col gap-2 lg:gap-2">
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-6">
          <div className="flex flex-col gap-0.5 w-full">
            <Input
              className="w-full"
              placeholder="نام"
              value={firstName}
              onChange={(e) => {
                updateFirstName(e.target.value);
              }}
            />
            <span className="w-full h-3 text-xs text-red-500">
              {firstName &&
                !isPersianString(firstName) &&
                "نام نمیتواند انگلیسی باشد"}
            </span>
          </div>
          <div className="flex flex-col gap-0.5 w-full">
            <Input
              placeholder="نام خانوادگی"
              value={lastName}
              onChange={(e) => {
                updateLastName(e.target.value);
              }}
            />
            <span className="w-full h-3 text-xs text-red-500">
              {lastName &&
                !isPersianString(lastName) &&
                "نام خانوادگی نمیتواند انگلیسی باشد"}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-0.5 w-full">
          <Input
            value={enToFaNumStr(phoneNumber)}
            placeholder="شماره موبایل"
            pattern="[0-9]*"
            inputMode="numeric"
            autoComplete="on"
            name="phoneNumber"
            onChange={(e) => {
              const value = faToEnNumStr(e.target.value);
              const isOnlyNumber = !Number.isNaN(Number(value));
              if (!isOnlyNumber) return;
              updatePhoneNumber(value);
            }}
          />
          <span className="w-full h-3 text-xs text-red-500">
            {debouncedPhoneNumber &&
              !isValidIranianPhoneNumber(debouncedPhoneNumber) &&
              "لطفا شماره موبایل را با فرمت صحیح وارد کنید"}
          </span>
        </div>
        <div className="flex flex-col gap-0.5 w-full">
          <Input
            placeholder="رمز عبور"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
          />
          <span className="w-full h-3 text-xs text-red-500">
            {password && passwordError}
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-center lg:justify-end">
        <Button
          text="ثبت نام"
          disabled={isRegisterButtonDisabled}
          onClick={() => {
            login();
            navigate("/insurance-choice");
          }}
        />
      </div>
    </div>
  );
};

export default UserRegistration;
