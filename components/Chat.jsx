"use client";
import { useEffect } from "react";

export default function Chat() {
  useEffect(() => {
    // Jangan inject 2x
    if (document.getElementById("tawkto-script")) return;

    // Filter error boolean dari Tawk.to agar Next dev overlay tidak muncul
    const originalConsoleError = console.error;
    console.error = (...args) => {
      // Jika ada 'true' sebagai error dan stack mengarah ke embed.tawk.to, drop saja
      const hasTrue = args.length === 1 && args[0] === true;
      if (hasTrue) return;
      originalConsoleError(...args);
    };

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    s1.id = "tawkto-script";
    s1.async = true;
    s1.src = "https://embed.tawk.to/695e37f473ebb51980332735/1jec0l5q6";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    const s0 = document.getElementsByTagName("script")[0];
    if (s0?.parentNode) s0.parentNode.insertBefore(s1, s0);
    else document.body.appendChild(s1);

    return () => {
      s1.remove();
      console.error = originalConsoleError; // restore
    };
  }, []);

  return null;
}
