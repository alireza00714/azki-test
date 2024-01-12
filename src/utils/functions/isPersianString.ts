const isPersianString = (value: string) => {
  const persianRegex = /^[\u0600-\u06FF\s]+$/;
  return persianRegex.test(value);
};

export default isPersianString;
