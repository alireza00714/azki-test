const isValidIranianPhoneNumber = (value: string) => {
  const phoneNumberRegex = /^(?:\+98|0|98)9(?:0[1-5]|[13]\d|2[0-2]|98)\d{7}$/;
  return phoneNumberRegex.test(value);
};

export default isValidIranianPhoneNumber;
