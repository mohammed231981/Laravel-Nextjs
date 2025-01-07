import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/verlof/verlofkaart", "/"],
};

export default withAuth(function middleware(req: NextRequestWithAuth) {
  const cookieStore = cookies();
  const token = cookieStore.get("next-auth.session-token")?.value;

  if (!token) {
    return NextResponse.redirect("/login");
  }
});
