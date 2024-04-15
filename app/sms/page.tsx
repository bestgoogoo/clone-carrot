import FormButton from "@/components/Button";
import FormInput from "@/components/Input";

export default function SMSLogIn() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h2>Hello!</h2>
        <h3>Log in with your phone number!</h3>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput type="tel" placeholder="Phone number" required errors={[]} />
        <FormInput
          type="password"
          placeholder="Verification code"
          required
          errors={[]}
        />
        <FormButton text="Verify" loading={false} />
      </form>
    </div>
  );
}
