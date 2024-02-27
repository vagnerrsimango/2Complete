import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { SessionProvider } from "next-auth/react";

const inter = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To Complete",
  description: "Task Completion Management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Navbar />
          <div className="w-full flex justify-center items-center py-32">
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
