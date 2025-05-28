import { Anton, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "MASK.ON — Where Art, Code & Culture Break the Mold",
  description: "Unfiltered Creativity. Code. Culture.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${spaceGrotesk.variable} ${inter.variable} bg-black text-off-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
