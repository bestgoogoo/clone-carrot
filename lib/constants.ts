export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MIN_ERROR = "6자 이상 필요";
export const PASSWORD_REGEX = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[!@#$%^&*()]).+$/
);
export const PASSWORD_REGEX_ERROR =
  "소문자, 대문자, 숫자, 특수문자 !@#$%^&*()가 포함되어야 해요";
