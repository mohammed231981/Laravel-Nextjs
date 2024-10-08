import RegisterForm from "@/components/register-form";
import { getCurrentUser } from "@/lib/session";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
  
  const session = await getCurrentUser();
 if(session){
  return redirect("/");
 }
  
  return (
    <div className="flex pb-40 flex-col items-center justify-between xl:pl-80 pr-5 pl-5">
      <div className="flex justify-between w-full pb-10  pl-5">
      <h1 className="pl-4 font-bold text-2xl  text-zinc-700">Registreren</h1>
      </div>
   

      <RegisterForm />

      <div className="flex  items-center gap-5 pt-10 justify-between">
      <div>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}