"use client";
import { useEffect } from "react";

export default function Chat() {
  useEffect(() => {
    // Cegah inject dua kali (sering terjadi saat hot reload)
    if (document.getElementById("tawkto-script")) return;

    // Optional: supaya sesuai dengan script asli Tawk
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    s1.id = "tawkto-script";
    s1.async = true;
    s1.src = "https://embed.tawk.to/695e37f473ebb51980332735/1jec0l5q6";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    // Sama seperti Tawk: insert sebelum script pertama yang ada
    const s0 = document.getElementsByTagName("script")[0];
    if (s0?.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.body.appendChild(s1);
    }

    return () => {
      s1.remove();
    };
  }, []);

  return null;
}
