"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import SocialLogIn from "@/components/social-login";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h2>Nice to meet you!</h2>
        <h3>Fill in the form below to join!</h3>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <Input
          name="username"
          type="text"
          placeholder="Username"
          minLength={4}
          required
          errors={state?.fieldErrors.username}
        />
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
        <Input
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          minLength={PASSWORD_MIN_LENGTH}
          required
          errors={state?.fieldErrors.confirm_password}
        />
        <Button text="Create Account" />
      </form>
      <SocialLogIn />
    </div>
  );
}
