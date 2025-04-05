"use client";

import { useEffect } from "react";
import { CartProvider } from '@/context/cart-context';

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    if (typeof document !== "undefined") {
      document.body.dataset.hydrated = "true";
    }
  }, []);

  return (
    <body className="antialiased" suppressHydrationWarning>
      <CartProvider>
        {children}
      </CartProvider>
    </body>
  );
}
