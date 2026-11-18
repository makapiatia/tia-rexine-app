"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE, AUTH_MAX_AGE, authToken } from "@/lib/site-auth";

export type UnlockState = { error: string | null };

export async function unlock(_prev: UnlockState, formData: FormData): Promise<UnlockState> {
  const expected = process.env.SITE_PASSWORD;
  if (!expected) {
    return { error: "The site password hasn't been configured yet." };
  }

  const password = String(formData.get("password") ?? "");
  if (password !== expected) {
    return { error: "That password isn't right. Try again." };
  }

  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE, await authToken(expected), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: AUTH_MAX_AGE,
  });

  redirect("/");
}
