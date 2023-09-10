import GoogleButton from "@/components/GoogleButton";
import SignInForm from "@/components/SignInForm";

const Signin = () => {
  return (
    <div className="stack">
      <h1>SignIn</h1>
      <GoogleButton />
      <div>or</div>
      <SignInForm />
    </div>
  );
};

export default Signin;
