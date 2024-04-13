import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogIn from "@/components/social-login";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h2>Nice to meet you!</h2>
        <h3>Fill in the form below to join!</h3>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput type="text" placeholder="Username" required errors={[]} />
        <FormInput type="email" placeholder="E-mail" required errors={[]} />
        <FormInput
          type="password"
          placeholder="Password"
          required
          errors={[]}
        />
        <FormInput
          type="password"
          placeholder="Confirm Password"
          required
          errors={[]}
        />
        <FormButton text="Create Account" loading={false} />
      </form>
      <SocialLogIn />
    </div>
  );
}
