"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useFormState } from "react-dom";
import { smsLogIn } from "./actions";
import { error } from "console";

const initialState = {
  token: false,
  error: undefined,
};

export default function SMSLogIn() {
  const [state, dispatch] = useFormState(smsLogIn, initialState);
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h2>Hello!</h2>
        <h3>Log in with your phone number!</h3>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        {state.token ? (
          <Input
            key="token"
            name="token"
            type="number"
            placeholder="Verification code"
            required
          />
        ) : (
          <Input
            key="phone"
            name="phone"
            type="text"
            placeholder="Phone number"
            required
            errors={state.error?.formErrors}
          />
        )}
        <Button text={state.token ? "Verify" : "Request Verification Code"} />
      </form>
    </div>
  );
}
