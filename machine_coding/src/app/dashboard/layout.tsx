import DashboardNav from "@/components/DashboardNav";
import { ReactNode } from "react";

export default function DashboardHome({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen ">
      <aside className="w-1/5 bg-gray-100 p-4 shadow-md">
        <DashboardNav />
      </aside>
      <main className="flex-1 p-6 text-black bg-white ">{children}</main>
    </div>
  );
}
