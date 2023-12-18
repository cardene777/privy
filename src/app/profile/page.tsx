"use client";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";

export default function Profile() {
  const { logout, ready, authenticated, user } = usePrivy();
  const router = useRouter();

  if (!(ready && authenticated) || !user) {
    return null;
  }

  const logoutHandler = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="container mx-auto w-full h-full mt-20">
      <div className="flex-col justify-center items-center w-full text-center">
        <p className="font-bold text-5xl">Profile</p>
        <div className="flex justify-center">
          <button
            className="text-center font-semibold text-lg mt-12 border-2 rounded-lg py-1 px-3"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
        <ul className="mt-12">
          <li>Email: {user.email ? user.email.address : "None"}</li>
          <li>Wallet: {user.wallet ? user.wallet.address : "None"}</li>
          <li>Google: {user.google ? user.google.email : "None"}</li>
          <li>Discord: {user.discord ? user.discord.username : "None"}</li>
          <li>Twitter: {user.twitter ? user.twitter.username : "None"}</li>
          <li>Github: {user.github ? user.github.username : "None"}</li>
          <li>Phone: {user.phone ? user.phone.number : "None"}</li>
        </ul>
      </div>
    </div>
  );
}
