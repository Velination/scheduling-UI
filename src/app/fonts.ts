import { Allura, Playfair_Display, Poppins } from "next/font/google";

export const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["600","700"],
  variable: "--font-subheading",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","500","600"],
  variable: "--font-body",
});
