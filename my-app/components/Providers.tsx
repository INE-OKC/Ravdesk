"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
export default function Providers(props: Props) {
  return (
    <div>
      <SessionProvider>{props.children}</SessionProvider>
    </div>
  );
}
