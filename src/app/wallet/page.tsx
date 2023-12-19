"use client";

import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";

export default function Wallet() {
    const { ready, authenticated, createWallet } = usePrivy();
    const router = useRouter();

    const createWalletHandler = async () => {
      await createWallet();
      router.push("/profile");
    };

  return (
    <div className="container mx-auto w-full mt-20">
      <div className="flex-col justify-center items-center w-full">
        <p className="font-bold text-5xl text-center">Wallet</p>
        <div className="flex justify-center text-center">
          <button
            className="text-center font-semibold text-lg mt-12 border-2 rounded-lg py-1 px-3"
            disabled={!(ready && authenticated)}
            onClick={createWalletHandler}
          >
            Create a wallet
          </button>
        </div>
      </div>
    </div>
  );
}
