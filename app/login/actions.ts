"use server";

import {
  PASSWORD_MIN_ERROR,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constants";
import db from "@/lib/db";
import getSession from "@/lib/sessions";

import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { z } from "zod";

const findUserEmail = async (email: string) => {
  const findUser = await db.user.findUnique({
    where: { email },
    select: { id: true },
  });
  return Boolean(findUser);
};

const formSchema = z.object({
  email: z
    .string({ required_error: "Password is required" })
    .email()
    .toLowerCase()
    .refine(findUserEmail, "존재하지 않는 이메일이에요"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_ERROR)
    .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
});

export const login = async (preState: any, formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const result = await formSchema.spa(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const findUser = await db.user.findUnique({
      where: { email: result.data.email },
      select: { id: true, password: true },
    });
    const checkPassword = await bcrypt.compare(
      result.data.password,
      findUser!.password ?? ""
    ); // findUserEmail func에서 findUser는 확실히 있었기 때문에 다음과 같은 sytax 사용
    if (!checkPassword) {
      return {
        fieldErrors: {
          password: ["비밀번호가 틀렸어요"],
          email: [],
        }, // zod안에 있지 않아도 형식을 따라해서 Return 할 수도 있음.
      };
    } else {
      const session = await getSession();
      session.id = findUser!.id; // 역시 !로 findUser는 분명히 있다고 강제함.
      return redirect("/");
    }
  }
};
