import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../../globals.css";
import Children from "@/types/children";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vodiy Parfum ",
  description: "Vodiy Parfume - E-commerce website",
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
