"use client"

import { PrivyProvider } from "@privy-io/react-auth";
import { PRIVY_APP_ID, ZERODEV_APP_ID } from "@common/config";
import { tcgverse } from "@/lib/chains";
import { sepolia } from "viem/chains";
import { ZeroDevProvider } from "@zerodev/privy";

const handleLogin = (user: any) => {
  console.log(`User ${user.id} logged in!`);
};

export default function WalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ZeroDevProvider projectId={ZERODEV_APP_ID}>
      <PrivyProvider
        appId={PRIVY_APP_ID}
        onSuccess={handleLogin}
        config={{
          embeddedWallets: {
            createOnLogin: "users-without-wallets",
            //   requireUserPasswordOnCreate: true,
            //   noPromptOnSignature: true,
          },
          // Configure your app's login methods
          // loginMethods: ["wallet", "email", "google", "twitter"],
          // Configure your app's branding and UIs
          appearance: {
            theme: "#02343F",
            accentColor: "#F0EDCC",
            logo: "https://res.cloudinary.com/dplp5wtzk/image/upload/v1702903792/cardene.png",
            //   showWalletLoginFirst: true,
          },
          // Configure your app's legal policies
          legal: {
            termsAndConditionsUrl: "https://your-terms-and-conditions-url",
            privacyPolicyUrl: "https://your-privacy-policy-url",
          },
          defaultChain: tcgverse,
          supportedChains: [tcgverse, sepolia],
        }}
      >
        {children}
      </PrivyProvider>
    </ZeroDevProvider>
  );
}
