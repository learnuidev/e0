"use client";

import { signIn } from "@/lib/auth-client";

// import { signIn, useSession, signOut } from "next-auth/react";

export default function Home() {
  return (
    <div className="text-center my-32">
      <h1 className="text-8xl text-center font-bold">e0</h1>
      <p className="text-2xl">Talk to your email</p>

      {false ? (
        <button
          onClick={() => {
            // signOut();
          }}
          className="border-[1px] py-[4px] px-2 mt-8 text-sm"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            signIn();
          }}
          className="border-[1px] py-[4px] px-2 mt-8 text-sm"
        >
          Login
        </button>
      )}
    </div>
  );
}
