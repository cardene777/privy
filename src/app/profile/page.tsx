"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePrivy, useWallets } from "@privy-io/react-auth";

export default function Profile() {
  const {
    logout,
    ready,
    authenticated,
    setWalletPassword,
    user,
    linkWallet,
    linkEmail,
    linkGithub,
    linkGoogle,
    linkDiscord,
    linkApple,
    linkPhone,
    unlinkWallet,
    unlinkEmail,
    unlinkGithub,
    unlinkGoogle,
    unlinkDiscord,
    unlinkApple,
    unlinkPhone,
    connectWallet,
  } = usePrivy();
  const { wallets } = useWallets();
  const router = useRouter();
  const [wallet, setWallet] = useState<any>()
  const [embedWallet, setEmbedWallet] = useState<any>();
  const [embedWalletAddress, setEmbedWalletAddress] = useState<string>('');
  const [chainId, setChainId] = useState<number>();
  const [provider, setProvider] = useState<any>();
  const [recoveryPassword, setRecoveryPassword] = useState<any>();

  const btnObject = [
    {
      name: "wallet",
      func: unlinkWallet,
    },
    {
      name: "email",
      func: unlinkEmail,
    },
    {
      name: "github",
      func: unlinkGithub,
    },
    {
      name: "google",
      func: unlinkGoogle,
    },
    {
      name: "discord",
      func: unlinkDiscord,
    },
    {
      name: "apple",
      func: unlinkApple,
    },
    {
      name: "phone",
      func: unlinkPhone,
    },
  ];

  const unlinkBtnObject = [
    {
      name: "unlinkWallet",
      func: linkWallet,
    },
    {
      name: "unlinkEmail",
      func: linkEmail,
    },
    {
      name: "unlinkGithub",
      func: linkGithub,
    },
    {
      name: "unlinkGoogle",
      func: linkGoogle,
    },
    {
      name: "unlinkDiscord",
      func: linkDiscord,
    },
    {
      name: "unlinkApple",
      func: linkApple,
    },
    {
      name: "unlinkPhone",
      func: linkPhone,
    },
  ];

  const logoutHandler = async () => {
    await logout();
    router.push("/");
  };

  const checkProvider = useCallback(async () => {
    const provider = await embedWallet.getEthereumProvider();
    if (provider) setProvider(provider);
  }, [embedWallet]);

  const checkPassword = useCallback(async () => {
    const alreadyHasPassword =
      embedWallet.recoveryMethod === "user-passcode";
    if (alreadyHasPassword) setRecoveryPassword(alreadyHasPassword);
  }, [embedWallet]);

  useEffect(() => {
    setWallet(wallets.find((wallet) => wallet.walletClientType === "metamask"));
    if (wallet?.chainId) setChainId(wallet?.chainId);
  }, [wallet?.chainId, wallets]);

  useEffect(() => {
    setEmbedWallet(wallets.find((wallet) => wallet.walletClientType === "privy"));
    if (embedWallet?.address) setEmbedWalletAddress(embedWallet.address);
  }, [embedWallet, wallets]);

  useEffect(() => {
    if (embedWallet) {
      checkProvider();
      checkPassword();
    }
  }, [checkPassword, checkProvider, embedWallet]);



  return (
    <div className="container mx-auto w-full mt-20">
      <div className="flex-col justify-center items-center w-full">
        <p className="font-bold text-5xl text-center">Profile</p>
        <div className="flex justify-center text-center">
          <button
            className="text-center font-semibold text-lg mt-12 border-2 rounded-lg py-1 px-3"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
        <div className="mt-12 w-full flex justify-center text-center">
          <div className="mt-12 w-1/2 text-start">
            <li>Email: {user?.email ? user?.email.address : "None"}</li>
            <li>Wallet: {user?.wallet ? user?.wallet.address : "None"}</li>
            <li>Google: {user?.google ? user?.google.email : "None"}</li>
            <li>Discord: {user?.discord ? user?.discord.username : "None"}</li>
            <li>Twitter: {user?.twitter ? user?.twitter.username : "None"}</li>
            <li>Github: {user?.github ? user?.github.username : "None"}</li>
            <li>Phone: {user?.phone ? user?.phone.number : "None"}</li>
          </div>
        </div>
        <div>
          <div className="flex justify-center text-center space-x-3">
            {btnObject.map((item, index) => (
              <button
                key={index}
                className="text-center font-semibold text-lg mt-12 border-2 rounded-lg py-1 px-3"
                onClick={() => item.func}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <div className="flex justify-center text-center space-x-3">
            {unlinkBtnObject.map((item, index) => (
              <button
                key={index}
                className="text-center font-semibold text-lg border-2 rounded-lg py-1 px-3"
                onClick={item.func}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-12 flex-col justify-center text-center space-x-3">
          <button
            onClick={connectWallet}
            className="text-center font-semibold text-lg border-2 rounded-lg py-1 px-3"
          >
            Connect Wallet
          </button>
          <p className="mt-2">Total connected wallets: {wallets.length}</p>
        </div>
        <div className="mt-12 flex-col justify-center text-center space-x-3">
          <p className="mt-2">EmbedWallet Address: {embedWalletAddress}</p>
        </div>
        <div className="mt-2 flex-col justify-center text-center space-x-3">
          <div className="flex justify-center text-center space-x-3">
            <button
              className="text-center font-semibold text-lg mt-12 border-2 rounded-lg py-1 px-3"
              disabled={!embedWallet}
              onClick={setWalletPassword}
              // tnb0qwret0hb2q-45bn-4b4q5r
            >
              Set Recovery Password
            </button>
          </div>
          <p className="mt-2">Recovery Password: {recoveryPassword}</p>
        </div>
      </div>
    </div>
  );
}
