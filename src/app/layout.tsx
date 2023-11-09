import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../../globals.css";
import Children from "@/types/children";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
