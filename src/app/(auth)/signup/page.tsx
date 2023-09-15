"use client";

import { FormEvent, useState } from "react";
import AuthForm from "@/app/(auth)/AuthForm";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    e.preventDefault();
    const supabase = createClientComponentClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${location.origin}/api/auth/callback` }
    });

    if (error) {
      setError(error.message);
    }

    if (!error) {
      router.push(`/verify`);
    }
  };
  return (
    <section>
      <h2 className="text-center">Signup</h2>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <div className="error">{error}</div>}
    </section>
  );
};

export default Signup;
