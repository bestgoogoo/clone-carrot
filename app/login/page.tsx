import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogIn from "@/components/social-login";

export default function LogIn() {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    console.log(formData);
  };
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h2>Hello!</h2>
        <h3>Log in with your email!</h3>
      </div>
      <form action={handleSubmit} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder="E-mail"
          required
          errors={[]}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={[]}
        />
        <FormButton text="Log In" loading={false} />
      </form>
      <SocialLogIn />
    </div>
  );
}
