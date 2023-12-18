"use client";
import { useRouter } from "next/navigation";
import { usePrivy, useWallets } from "@privy-io/react-auth";

export default function Profile() {
  const {
    logout,
    ready,
    authenticated,
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

  if (!(ready && authenticated) || !user) {
    return null;
  }

  const logoutHandler = () => {
    logout();
    router.push("/");
  };

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
            <li>Email: {user.email ? user.email.address : "None"}</li>
            <li>Wallet: {user.wallet ? user.wallet.address : "None"}</li>
            <li>Google: {user.google ? user.google.email : "None"}</li>
            <li>Discord: {user.discord ? user.discord.username : "None"}</li>
            <li>Twitter: {user.twitter ? user.twitter.username : "None"}</li>
            <li>Github: {user.github ? user.github.username : "None"}</li>
            <li>Phone: {user.phone ? user.phone.number : "None"}</li>
          </div>
        </div>
        <div>
          <div className="flex justify-center text-center space-x-3">
            {btnObject.map((item, index) => (
              <button
                key={index}
                className="text-center font-semibold text-lg mt-12 border-2 rounded-lg py-1 px-3"
                onClick={item.func}
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
      </div>
    </div>
  );
}
