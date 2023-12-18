"use client"

import { PrivyProvider } from "@privy-io/react-auth";
import { PRIVY_APP_ID } from "@common/config";

const handleLogin = (user: any) => {
  console.log(`User ${user.id} logged in!`);
};

export default function WalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <PrivyProvider
          appId={PRIVY_APP_ID}
          onSuccess={handleLogin}
          config={{
            loginMethods: ["email", "wallet"],
            appearance: {
              theme: "light",
              accentColor: "#676FFF",
              logo: "https://your-logo-url",
            },
          }}
        >
          {children}
        </PrivyProvider>
  );
}
