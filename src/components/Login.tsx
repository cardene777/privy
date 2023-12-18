"use client"

import { usePrivy } from "@privy-io/react-auth";

export const LoginButton = () => {
  const { login } = usePrivy();
  return <button onClick={login}>Log in</button>;
}
