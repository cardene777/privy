"use client";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";

export default function Profile() {
  const { logout, ready, authenticated, user, linkWallet, linkEmail, linkGithub, linkGoogle, linkDiscord, linkApple, linkPhone } = usePrivy();
    const router = useRouter();

    const btnObject = [
        {
            name: 'wallet',
            func: linkWallet,
        },
        {
            name: 'email',
            func: linkEmail,
        },
        {
            name: 'github',
            func: linkGithub,
        },
        {
            name: 'google',
            func: linkGoogle,
        },
        {
            name: 'discord',
            func: linkDiscord,
        },
        {
            name: 'apple',
            func: linkApple,
        },
        {
            name: 'phone',
            func: linkPhone,
        },
    ]

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
      </div>
    </div>
  );
}
