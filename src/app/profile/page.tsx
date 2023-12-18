"use client";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";


export default function Profile() {
    const { logout } = usePrivy();
    const router = useRouter();

    const logoutHandler = () => {
        logout();
        router.push("/");
    }

  return (
    <div className="container mx-auto w-full h-full mt-20">
      <p className="text-center font-bold text-5xl">Profile</p>
      <div className="flex justify-center">
        <button
          className="text-center font-semibold text-lg mt-12 border-2 rounded-lg py-1 px-3"
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
