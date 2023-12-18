import { defineChain } from "viem";

export const tcgverse = defineChain({
  id: 2400,
  name: "TCG Verse",
  network: "TCG Verse",
  nativeCurrency: {
    decimals: 18,
    name: "OAS",
    symbol: "OAS",
  },
  rpcUrls: {
    public: { http: ["https://rpc.tcgverse.xyz/"] },
    default: { http: ["https://rpc.tcgverse.xyz/"] },
  },
  blockExplorers: {
    default: { name: "TCG Verse Explorer", url: "https://rpc.tcgverse.xyz/" },
  },
  testnet: false,
});
