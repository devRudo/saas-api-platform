"use client";

import Link from "next/link";

export function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold">API Vault</h1>
        </Link>
      </nav>
    </header>
  );
}
