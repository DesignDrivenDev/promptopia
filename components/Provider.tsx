"use client";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

import type { AppProps } from "next/app";
const Provider = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;

// "use client";
// import { SessionProvider } from "next-auth/react";
// import { Session } from "next-auth";
// const Provider = ({
//   children,
//   session,
// }: {
//   children: React.ReactNode;
//   session: Session;
// }) => {
//   return <SessionProvider session={session}>{children}</SessionProvider>;
// };

// export default Provider;
