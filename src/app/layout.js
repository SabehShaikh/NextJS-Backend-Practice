"use client";

import localFont from "next/font/local";
import { Poppins } from "next/font/google"; // Import Poppins from Google Fonts
import "./globals.css";
import { usePathname } from "next/navigation";

// Local fonts (if you're still using them)
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Google Font - Poppins
const poppins = Poppins({
  subsets: ["latin"], // Define subsets as needed
  variable: "--font-poppins", // Optional: Add CSS variable for Poppins
  weight: ["600", "700"], // Optional: Select weights you want (normal, bold, etc.)
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  console.log("pathname", pathname);

  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {/* If the current pathname does NOT contain "/shop", render the Header */}
        {pathname.indexOf("/shop") == -1 && <h1>Header</h1>}
        {children}
      </body>
    </html>
  );
}
