// нужен для использования хука useSession() из
// библиотеки next-auth в компоненте Navigation
"use client";
"use client";

import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default Providers