"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [{ name: "OTP Input Field", path: "/dashboard/otpInput" }];

export default function DashboardNav() {
  const pathName = usePathname();

  return (
    <nav className="space-y-4">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`block px-2 py-1 rounded text-gray-700   hover:bg-gray-200 ${
            pathName === item.path ? "font-normal  bg-gray-200" : ""
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
