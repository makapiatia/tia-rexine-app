"use client";

import classNames from "classnames";
import { useEffect, useSyncExternalStore } from "react";
import { Pause, Play } from "lucide-react";
import { pill } from "@/components/shared/styles";

const STORAGE_KEY = "animations-paused";
const listeners = new Set<() => void>();

function readPaused() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function setPaused(value: boolean) {
  try {
    window.localStorage.setItem(STORAGE_KEY, String(value));
  } catch {}
  listeners.forEach((listener) => listener());
}

export function MotionToggle() {
  const paused = useSyncExternalStore(subscribe, readPaused, () => false);

  useEffect(() => {
    document.documentElement.toggleAttribute("data-paused", paused);
  }, [paused]);

  return (
    <button
      type="button"
      className={classNames(pill, "py-1.75 text-[13px] focus-visible:outline-offset-2 [&_svg]:size-3.5")}
      aria-pressed={paused}
      onClick={() => setPaused(!paused)}
    >
      {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
      {paused ? "Play animations" : "Pause animations"}
    </button>
  );
}
