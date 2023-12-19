"use client";

import { usePrivy } from "@privy-io/react-auth";

export default function Wallet() {
  const { user, signMessage } = usePrivy();
  const message = "Hello Privy";

  const uiConfig = {
    title: "The Private Compendium",
    description: "Let's make sure we understand Privy!",
    buttonText: "Privy!!!",
  };

  return (
    <div className="container mx-auto w-full mt-20">
      <div className="flex-col justify-center items-center w-full">
        <p className="font-bold text-5xl text-center">Sign</p>
        <div className="flex justify-center text-center">
          <button
            className="text-center font-semibold text-lg mt-12 border-2 rounded-lg py-1 px-3"
            disabled={!user?.wallet}
            onClick={async () => {
              const signature = await signMessage(message, uiConfig);
            }}
          >
            Sign
          </button>
        </div>
      </div>
    </div>
  );
}
