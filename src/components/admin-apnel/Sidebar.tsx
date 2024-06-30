"use client";

import Link from "next/link";
import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoAnalytics, IoSettings } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

const menus = [
  {
    title: "Dashboard | Rocket Store",
    icon: <MdDashboard />,
    href: "/admin/dashboard",
  },
  {
    title: "Produtos",
    icon: <RiShoppingCartLine />,
    href: "/admin/produtos",
  },
  {
    title: "Contas",
    icon: <MdManageAccounts />,
    href: "#",
  },
  {
    title: "Transações",
    icon: <GrTransaction />,
    href: "#",
  },
  {
    title: "Análises",
    icon: <IoAnalytics />,
    href: "#",
  },
  {
    title: "Configurações",
    icon: <IoSettings />,
    href: "#",
  },
];

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="bg-white w-[300px] min-h-screen p-4 shrink-0">
      <div className="flex items-center gap-4">
        <img className="size-12 rounded-lg" src="/logo.png" alt="logo" />
        <h2 className="text-[20px] font-semibold">Rocket Store | Painel</h2>
      </div>

      <ul className="space-y-4 mt-6">
        {menus.map((menu) => (
          <Link
            key={menu.title}
            href={menu.href}
            className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-pink hover:text-white ${
              pathName === menu.href ? "bg-pink text-black" : "bg-gray-200"
            }`}
          >
            <div className="text-[20px]">{menu.icon}</div>
            <p>{menu.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;