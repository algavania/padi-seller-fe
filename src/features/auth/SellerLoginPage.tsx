import { Button, Card, Textfield } from "@legion-ui/core";
import { Eye, EyeSlash } from "iconsax-react";
import { useState } from "react";
import { CarouselComponent } from "./components/CarouselComponent";
import { useAuth } from "../../context/AuthContext";

export default function SellerLoginPage() {
  const carousels = [
    {
      image: "/auth/seller1.svg",
      title: "Dukung Usaha Anda dengan Invoice Financing!",
      description:
        "Invoice financing adalah solusi pembiayaan usaha yang diberikan kepada Seller PaDi UMKM dengan menggunakan invoice aktif atau belum jatuh tempo sebagai jaminan yang bermanfaat dalam memperlancar keuangan bisnis jangka pendek. Tunggu apa lagi?",
    },
    {
      image: "/auth/carousel2.svg",
      title: "Pasti Untung di PaDi UMKM",
      description: "Berbagai promo dan penawaran terbaik setiap bulannya",
    },
    {
      image: "/auth/seller3.svg",
      title: "Terdapat Berbagai Pelatihan!",
      description:
        "Untuk menunjang kualitas seller, PaDi UMKM menyediakan pelatihan maupun sertifikasi secara rutin yang bisa diikuti.",
    },
  ];

  const { loginUser, loading, error } = useAuth();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle login
  const handleLogin = async () => {
    await loginUser(email, password);
  };

  return (
    <div className="bg-primary-500 min-h-screen px-4 py-8 md:px-12 md:py-0 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8">
      <div className="w-full mx-auto px-12 mb-8 md:mb-0 hidden md:block">
        <CarouselComponent items={carousels} />
      </div>

      <Card bordered className="w-full px-6 py-4 md:px-8 md:py-6">
        <div className="flex w-full justify-between items-center mb-5">
          <h2 className="body-large text-black font-semibold">Login Sebagai</h2>
          <img src="/logo.svg" alt="Logo" className="w-20 md:w-24" />
        </div>

        <Textfield
          label="Email"
          placeholder="johndoe@gmail.com"
          className="font-nunitoSans"
          block
          type="email"
          value={email}
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
        />

        <Textfield
          label="Password"
          className="font-nunitoSans my-5"
          block
          type={isPasswordVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
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

        {error && (
          <p className="text-danger-500 mb-4 text-center w-full">{error}</p>
        )}

        <Button
          className="primary-color"
          block
          loading={loading}
          onClick={handleLogin}
        >
          <div className="text-center w-full">Login</div>
        </Button>
      </Card>
    </div>
  );
}
