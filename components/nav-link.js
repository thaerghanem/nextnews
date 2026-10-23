"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link className={path.startsWith(href) ? "active" : undefined} href={href}>
      {children}
    </Link>
  );
}
