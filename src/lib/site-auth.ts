export const AUTH_COOKIE = "site-auth";
export const AUTH_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

/**
 * Cookie value proving the visitor entered the password. It is a hash of the
 * password, so changing SITE_PASSWORD signs everyone out automatically.
 */
export async function authToken(password: string): Promise<string> {
  const data = new TextEncoder().encode(`tia-rexine-site:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

export async function isValidToken(token: string | undefined): Promise<boolean> {
  const password = process.env.SITE_PASSWORD;
  if (!password || !token) return false;
  return token === (await authToken(password));
}
