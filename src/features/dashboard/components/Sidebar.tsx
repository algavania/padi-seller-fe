import { Avatar } from "@legion-ui/core";
import { ShoppingBag } from "iconsax-react";
import {
  ArrowRightLeft,
  Handshake,
  Home,
  MessageSquareMore,
  Paintbrush,
  Scale,
  Settings,
  Star,
  Tag,
  Menu,
  X,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const sidebars = [
    { title: "Dashboard", icon: <Home size="24" color="#4A4C4E" /> },
    { title: "Chat", icon: <MessageSquareMore size="24" color="#4A4C4E" /> },
    { title: "Transaksi", icon: <ArrowRightLeft size="24" color="#4A4C4E" /> },
    { title: "Ulasan", icon: <Star size="24" color="#4A4C4E" /> },
    { title: "Produk", icon: <ShoppingBag size="24" color="#4A4C4E" /> },
    { title: "Pinjaman", icon: <Handshake size="24" color="#4A4C4E" /> },
    { title: "Penawaran", icon: <Tag size="24" color="#4A4C4E" /> },
    { title: "Dekorasi Toko", icon: <Paintbrush size="24" color="#4A4C4E" /> },
    { title: "Pengaturan", icon: <Settings size="24" color="#4A4C4E" /> },
    { title: "Bantuan Hukum", icon: <Scale size="24" color="#4A4C4E" /> },
    { title: "Pendaftaran NIB", icon: <Scale size="24" color="transparent" /> },
  ];

  return (
    <>
      <button className="block md:hidden p-3" onClick={toggleSidebar}>
        {isOpen ? <X size="24" color="#4A4C4E" /> : <Menu size="24" color="#4A4C4E" />}
      </button>

      <div
        className={`transition-transform duration-300 ease-in-out ${
          isOpen
            ? "translate-x-0 fixed top-0 left-0 h-full w-64 bg-white p-4 shadow-lg z-40"
            : "-translate-x-full"
        } md:relative md:translate-x-0 md: px-4 md:shadow-none`}
      >
        <div className="flex gap-2 items-center justify-between">
          <div className="flex gap-3 justify-start items-center">
            <Avatar style={{ backgroundColor: "#0092AE" }} size="md" />
            <p className="body-very-small font-semibold text-gray-900">
              Tutorial
            </p>
          </div>
        </div>

        <div className="mt-4">
          {sidebars.map((sidebar, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mt-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
            >
              {sidebar.icon}
              <p className="body-small font-semibold text-gray-900">
                {sidebar.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
