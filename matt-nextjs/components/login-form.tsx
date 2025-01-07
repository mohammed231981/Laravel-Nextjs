"use client";

import { InputText } from "primereact/inputtext";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Button from "./Button";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const credentials = Object.fromEntries(formData);
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    signIn("credentials", { ...credentials, callbackUrl });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <div className="flex flex-col  p-5 justify-center w-96">
        <label   className="pt-4" htmlFor="email">Email</label>
        <InputText
          id="email"
          name="email"
          type="email"
          placeholder="email"

        />

        <label className="pt-4" htmlFor="password">Password</label>
        <InputText
          id="password"
          name="password"
          placeholder="password"
          defaultValue=""
        
        />

      </div>
        <Button  type="submit" title="Inloggen" classes="ml-6 xl:w-auto"/>
      </form>

      <FormError error={error} />
    </>
  );
}

function FormError({ error }: { error: string | null }) {
  if (!error) return null;

  const errorMessages: { [key: string]: string } = {
    CredentialsSignin: "Invalid credentials",
    Default: "Default Error Message",
  };

  return <p>{errorMessages[error]}</p>;
}