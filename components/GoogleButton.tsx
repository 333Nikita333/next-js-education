"use client"
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const GoogleButton = () => {
  // получаем callbackUrl через адрессную строку
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";
  
  return (
    // для signIn нужно задать провайдер
    <button type="button" onClick={() => signIn("google", { callbackUrl })}>
      Sign in with Google
    </button>
  );
};

export default GoogleButton;
