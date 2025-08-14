import type { Metadata } from "next";
import "./globals.css";
import { allura, playfairDisplay, poppins } from "./fonts";

export const metadata: Metadata = {
  title: "BeautyByMiemie",
  description: "Beauty Salon",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Make Poppins the default; expose variables for others */}
      <body className={`${poppins.className} ${allura.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
