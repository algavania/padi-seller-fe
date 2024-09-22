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
} from "lucide-react";

export default function Sidebar() {
  const sidebars = [
    {
      title: "Dashboard",
      icon: <Home size="24" color="#4A4C4E" />,
    },
    {
      title: "Chat",
      icon: <MessageSquareMore size="24" color="#4A4C4E" />,
    },
    {
      title: "Transaksi",
      icon: <ArrowRightLeft size="24" color="#4A4C4E" />,
    },
    {
      title: "Ulasan",
      icon: <Star size="24" color="#4A4C4E" />,
    },
    {
      title: "Produk",
      icon: <ShoppingBag size="24" color="#4A4C4E" />,
    },
    {
      title: "Pinjaman",
      icon: <Handshake size="24" color="#4A4C4E" />,
    },
    {
      title: "Penawaran",
      icon: <Tag size="24" color="#4A4C4E" />,
    },
    {
      title: "Dekorasi Toko",
      icon: <Paintbrush size="24" color="#4A4C4E" />,
    },
    {
      title: "Pengaturan",
      icon: <Settings size="24" color="#4A4C4E" />,
    },
    {
      title: "Bantuan Hukum",
      icon: <Scale size="24" color="#4A4C4E" />,
    },

    {
      title: "Pendaftaran NIB",
      icon: <Scale size="24" color="transparent" />,
    },
  ];
  return (
    <div className="p-3">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-3 justify-start items-center">
          <Avatar />
          <p className="body-very-small font-semibold text-gray-900">
            Tutorial
          </p>
        </div>
      </div>
      <div>
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
  );
}
