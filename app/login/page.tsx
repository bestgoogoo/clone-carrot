"use client";

import { useFormState } from "react-dom";

import { login } from "./actions";
import Button from "@/components/Button";
import Input from "@/components/Input";
import SocialLogIn from "@/components/social-login";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function LogIn() {
  const [state, action] = useFormState(login, null);
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h2>Hello!</h2>
        <h3>Log in with your email!</h3>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          required
          errors={state?.fieldErrors.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          minLength={PASSWORD_MIN_LENGTH}
          required
          errors={state?.fieldErrors.password}
        />
        <Button text="Log In" />
      </form>
      <SocialLogIn />
    </div>
  );
}
