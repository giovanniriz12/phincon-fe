import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import RootProvider from "./_redux/Provider";
import BootstrapClient from "@/js/bootstrapClient";

export const metadata: Metadata = {
  title: "Phincon Poke",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RootProvider>
          {children}
          <BootstrapClient />
        </RootProvider>
      </body>
    </html>
  );
}
