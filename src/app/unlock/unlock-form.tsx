"use client";

import { useActionState } from "react";
import { unlock, type UnlockState } from "./actions";

const initialState: UnlockState = { error: null };

export function UnlockForm() {
  const [state, formAction, pending] = useActionState(unlock, initialState);

  return (
    <form action={formAction} className="unlock-form">
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        autoFocus
        required
        aria-invalid={state.error ? true : undefined}
        aria-describedby={state.error ? "unlock-error" : undefined}
      />
      <button type="submit" disabled={pending}>
        {pending ? "Checking…" : "Enter"}
      </button>
      <p id="unlock-error" className="unlock-error" role="alert">
        {state.error}
      </p>
    </form>
  );
}
