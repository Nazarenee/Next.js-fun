"use client";
import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const NavBar = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex bg-slate-200 p-5">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      {session?.user ? (
        <>
          <span className="mr-5">{session.user.email}</span>
          <button onClick={() => signOut()} className="mr-5">
            Log out
          </button>
        </>
      ) : (
        <Link href="/api/auth/signin" className="mr-5">
          Log in
        </Link>
      )}
      <Link href="/users" className="mr-5">
        Users
      </Link>
      <Link href="/api/users" className="mr-5">
        Api Users
      </Link>
      <Link href="/api/products" className="mr-5">
        Api products
      </Link>
    </div>
  );
};

export default NavBar;
