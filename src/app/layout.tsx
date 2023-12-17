import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrivyProvider } from "@privy-io/react-auth";
import "./globals.css";
import { PRIVY_APP_ID } from "@common/config"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const handleLogin = (user: any) => {
  console.log(`User ${user.id} logged in!`);
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
      </body>
    </html>
  );
}
