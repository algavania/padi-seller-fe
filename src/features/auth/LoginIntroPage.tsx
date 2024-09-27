import { Card } from "@legion-ui/core";
import { ArrowRight2, Shop, ShoppingCart } from "iconsax-react";
import { Link } from "react-router-dom";
import { CarouselComponent } from "./components/CarouselComponent";

export default function LoginIntroPage() {
  const carousels = [
    {
      image: "/auth/carousel1.svg",
      title: "Bersama PaDi UMKM",
      description:
        "Mari tingkatkan pertumbuhan ekonomi UMKM untuk Indonesia yang lebih maju",
    },
    {
      image: "/auth/carousel2.svg",
      title: "Pasti Untung di PaDi UMKM",
      description: "Berbagai promo dan penawaran terbaik setiap bulannya",
    },
    {
      image: "/auth/carousel3.svg",
      title: "Semua Tersedia di PaDi UMKM",
      description:
        "PaDi UMKM menyediakan berbagai kebutuhan yang diperlukan sehari-hari. Dari kebutuhan kantor hingga kebutuhan pribadi, semua ditemukan dalam satu pasar digital!",
    },
  ];

  const loginData = [
    {
      icon: <Shop size="24" color="#0092AE" variant="Bulk" />,
      title: "Penjual",
      description: "Jual produk secara efisien ke BUMN maupun retail",
      link: "/seller-login",
    },
    {
      icon: <ShoppingCart size="24" color="#0092AE" variant="Bulk" />,
      title: "Pembeli",
      description: "Login pembeli retail dan B2B",
      link: "#",
    },
  ];

  return (
    <div className="bg-primary-500 min-h-screen px-4 py-8 md:px-12 md:py-0 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8">
      <div className="w-full mx-auto px-12">
        <CarouselComponent items={carousels} />
      </div>

      <Card bordered className="w-full px-6 py-4 md:px-8 md:py-6">
        <div className="flex w-full justify-between items-center mb-5">
          <h2 className="body-large text-black font-semibold">Login Sebagai</h2>
          <img src="/logo.svg" alt="Logo" className="w-24" />
        </div>

        {loginData.map((item, index) => (
          <Link to={item.link} key={index}>
            <Card
              bordered
              hoverable
              className="border-gray-500 mb-4 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="p-1 rounded-lg bg-primary-50 h-fit">
                  {item.icon}
                </div>
                <div className="w-full">
                  <h2 className="body-large font-bold text-black">
                    {item.title}
                  </h2>
                  <p className="body-small">{item.description}</p>
                </div>
                <ArrowRight2 size="24" color="#0A0A0B" />
              </div>
            </Card>
          </Link>
        ))}
      </Card>
    </div>
  );
}
