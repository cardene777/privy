"use client";

import { usePrivySmartAccount } from "@zerodev/privy";
import { useEffect, useCallback } from "react";

export default function Wallet() {
  const { zeroDevReady, sendTransaction } = usePrivySmartAccount();

  const sendEthFromAA = useCallback(async () => {
    const transactionHash = await sendTransaction({
      to: "0xD46a08622aFF5d11d23c1CeC0b6f3b51e7fBEf09",
      chainId: 11155111,
      value: 100,
    });
    console.log(`🚀 transaction hash: ${transactionHash}`);
  }, [sendTransaction]);

  useEffect(() => {
    if (zeroDevReady) sendEthFromAA();
  }, [sendEthFromAA, zeroDevReady]);

  return (
    <div className="container mx-auto w-full mt-20">
      <div className="flex-col justify-center items-center w-full">
        <p className="font-bold text-5xl text-center">Account Abstraction</p>
        <div className="flex justify-center text-center">
          {/* <button
            className="text-center font-semibold text-lg mt-12 border-2 rounded-lg py-1 px-3"
            disabled={!(ready && authenticated)}
            onClick={createWalletHandler}
          >
            Create a wallet
          </button> */}
        </div>
      </div>
    </div>
  );
}
