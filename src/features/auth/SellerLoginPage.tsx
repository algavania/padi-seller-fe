import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button, Card, Textfield } from "@legion-ui/core";
import { ArrowRight2, Eye, EyeSlash, Shop, ShoppingCart } from "iconsax-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CarouselComponent } from "./components/CarouselComponent";

export default function SellerLoginPage() {
  const carousels = [
    {
      image: "/auth/seller1.svg",
      title: "Dukung Usaha Anda dengan Invoice Financing!",
      description:
        "Invoice financing adalah solusi pembiayaan usaha yang diberikan kepada Seller PaDi UMKM dengan menggunakan invoice aktif atau belum jatuh tempo sebagai jaminan yang bermanfaat dalam memperlancar keuangan bisnis jangka pendek. Tunggu apa lagi?",
    },
    {
      image: "/auth/seller1.svg",
      title: "Dukung Usaha Anda dengan Invoice Financing!",
      description:
        "Invoice financing adalah solusi pembiayaan usaha yang diberikan kepada Seller PaDi UMKM dengan menggunakan invoice aktif atau belum jatuh tempo sebagai jaminan yang bermanfaat dalam memperlancar keuangan bisnis jangka pendek. Tunggu apa lagi?",
    },
    {
      image: "/auth/seller1.svg",
      title: "Dukung Usaha Anda dengan Invoice Financing!",
      description:
        "Invoice financing adalah solusi pembiayaan usaha yang diberikan kepada Seller PaDi UMKM dengan menggunakan invoice aktif atau belum jatuh tempo sebagai jaminan yang bermanfaat dalam memperlancar keuangan bisnis jangka pendek. Tunggu apa lagi?",
    },
  ];

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="bg-primary-500 min-h-screen grid grid-cols-2 items-center justify-center gap-12 px-12">
      <div className="mx-auto px-12">
        <CarouselComponent items={carousels} />
      </div>
      <Card bordered className="px-8 py-4">
        <div className="flex w-full justify-between items-center mb-5">
          <h2 className="body-large text-black font-semibold">Login Sebagai</h2>
          <img src="/logo.svg" alt="Logo" />
        </div>

        <Textfield
          label="Email"
          placeholder="johndoe@gmail.com"
          className="font-nunitoSans"
          block
          type="email"
        />

        <Textfield
          label="Password"
          className="font-nunitoSans my-5"
          block
          type={isPasswordVisible ? "text" : "password"}
          iconRight={
            isPasswordVisible ? (
              <Eye
                className="cursor-pointer"
                onClick={() => setPasswordVisible(false)}
                size="18"
                color="#7E8184"
              />
            ) : (
              <EyeSlash
                className="cursor-pointer"
                onClick={() => setPasswordVisible(true)}
                size="18"
                color="#7E8184"
              />
            )
          }
        />

        <Button className="primary-color" block>
            <div className="text-center w-full">Login</div>
        </Button>
      </Card>
    </div>
  );
}
