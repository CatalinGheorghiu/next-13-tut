import Link from "next/link";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <nav>
        <h1>Dojo Helpdesk</h1>
        <Link href={"/signup"}>Sign up</Link>
        <Link href={"/login"}>Login</Link>
      </nav>
      {children}
    </>
  );
};

export default AuthLayout;
