"use client";

import AuthForm from "@/app/(auth)/AuthForm";
import { FormEvent, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const Login = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    e.preventDefault();
    setError("");

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      setError(error.message);
    }

    if (!error) {
      router.push("/");
    }
  };
  return (
    <section>
      <h2 className="text-center">Login</h2>
      <AuthForm handleSubmit={handleSubmit} />

      {error && <div className="error">{error}</div>}
    </section>
  );
};

export default Login;
