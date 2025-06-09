// src/app/components/ClientLayout.tsx
'use client';

import { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Loader from "../components/loader/page"; // Adjust path if needed

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return <Loader />;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
