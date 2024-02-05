import type { Metadata } from "next";
import "@/app/globals.css";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Listed Pokemon",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Fragment>{children}</Fragment>;
}
