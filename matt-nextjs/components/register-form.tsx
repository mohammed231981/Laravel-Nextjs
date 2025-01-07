"use client";

import { InputText } from "primereact/inputtext";
import fetchClient from "@/lib/fetch-client";
import { signIn } from "next-auth/react";
import Button from "./Button";

export default function RegisterForm() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetchClient({
        method: "POST",
        url: process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/register",
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (!response.ok) {
        throw response;
      }

      const credentials = {
        email: formData.get("email"),
        password: formData.get("password"),
      };

      signIn("credentials", credentials);
    } catch (error) {
      if (error instanceof Response) {
        const response = await error.json();

        if (!response.errors) {
          throw error;
        }

        return Object.keys(response.errors).map((errorKey) => {
          const input = document.querySelector(`[name="${errorKey}"]`) as HTMLInputElement;
          input.setCustomValidity(response.errors[errorKey]);
          input.reportValidity();
        });
      }

      throw new Error("An error has occurred during registration request");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col p-5 justify-center w-96">
      <label className="pt-4" htmlFor="name">Naam</label>
      <InputText
        id="name"
        name="name"
        type="text"
        defaultValue="John Doe"
      />

      <label className="pt-4" htmlFor="email">Email</label>
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
        type="password"
        placeholder="password"
      />

      <label className="pt-4" htmlFor="password_confirmation">Password bevestigen</label>
      <InputText
        id="password_confirmation"
        name="password_confirmation"
        type="password"
        defaultValue="password"
      />
    </div>
    <Button  type="submit" title="Registeren" classes="ml-6 xl:w-auto"/>
    </form>
  );
}