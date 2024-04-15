"use server";

import { z } from "zod";

// (소문자)(대문자)(숫자)(특수기호 !@#$%^&*()) 필수
const passwordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[!@#$%^&*()]).+$/
);

const checkPassword = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "영문으로 작성해야 해요",
        required_error: "필수 입력 사항",
      })
      .min(3, "3자 이상 작성필요")
      .max(10, "10자 이하 작성필요")
      .refine(
        (username: string) => username !== "username",
        "username은 사용할 수 없어요"
      ),
    email: z.string().email().toLowerCase(),
    password: z
      .string()
      .min(8)
      .regex(passwordRegex, "소문자, 대문자, 숫자, 특수문자가 포함되어야 해요"),
    confirm_password: z.string().min(8),
  })
  .refine(checkPassword, {
    message: "비밀번호가 일치하지 않아요",
    path: ["confirm_password"],
  });

export async function createAccount(preState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten().formErrors);
    return result.error.flatten();
  }
}
