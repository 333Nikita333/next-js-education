"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";

const SignInForm = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/profile");
    } else {
      console.log(res);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="email" name="email" required />
      <label>Password</label>
      <input type="password" name="password" required />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
