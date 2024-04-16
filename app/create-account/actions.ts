"use server";

import {
  PASSWORD_MIN_ERROR,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constants";
import db from "@/lib/db";

import { z } from "zod";

const checkUniqueUsername = async (username: string) => {
  const findUser = await db.user.findUnique({
    where: { username },
    select: { id: true },
  });
  return !Boolean(findUser);
};

const checkUniqueEmail = async (email: string) => {
  const findUser = await db.user.findUnique({
    where: { email },
    select: { id: true },
  });
  return !Boolean(findUser);
};

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
      .toLowerCase()
      .min(4, "4자 이상 작성필요")
      .refine(checkUniqueUsername, "이미 존재하네요")
      .refine(
        (username: string) => username !== "username",
        "username은 사용할 수 없어요"
      ),
    email: z
      .string()
      .email()
      .toLowerCase()
      .refine(checkUniqueEmail, "이미 등록된 email이네요"),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_ERROR)
      .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirm_password: z.string().min(PASSWORD_MIN_LENGTH),
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
  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}
