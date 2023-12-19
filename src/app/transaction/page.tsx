"use client";

import { usePrivy } from "@privy-io/react-auth";

export default function Wallet() {
  const { user, sendTransaction } = usePrivy();
  const unsignedTx = {
    to: "0xD46a08622aFF5d11d23c1CeC0b6f3b51e7fBEf09",
    chainId: 11155111,
    value: 100,
  };

  // Replace this with the text you'd like on your transaction modal
  const uiConfig = {
    header: "Send Sepolia Eth",
    description: "Send 0.01 Sepolia Eth",
    buttonText: "Send Sepolia Eth",
  };

  return (
    <div className="container mx-auto w-full mt-20">
      <div className="flex-col justify-center items-center w-full">
        <p className="font-bold text-5xl text-center">Transaction</p>
        <div className="flex justify-center text-center">
          <button
            className="text-center font-semibold text-lg mt-12 border-2 rounded-lg py-1 px-3"
            disabled={!user?.wallet}
            onClick={async () => {
              const txReceipt = await sendTransaction(unsignedTx, uiConfig);
            }}
          >
            Send Sepolia ETH
          </button>
        </div>
      </div>
    </div>
  );
}
