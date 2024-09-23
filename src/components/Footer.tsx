import { Whatsapp } from "iconsax-react";
import { Mail } from "lucide-react";

export default function Footer() {
  const about = [
    {
      title: "PaDi UMKM",
      isHead: true,
    },
    {
      title: "Tentang PaDi UMKM",
      isHead: false,
    },
    {
      title: "Syarat & Ketentuan",
      isHead: false,
    },
    {
      title: "Kebijakan Privasi",
      isHead: false,
    },
    {
      title: "Finance",
      isHead: false,
    },
  ];

  const seller = [
    {
      title: "Penjual",
      isHead: true,
    },
    {
      title: "Marketplace",
      isHead: false,
    },
    {
      title: "Tender",
      isHead: false,
    },
    {
      title: "Control Tower",
      isHead: false,
    },
  ];

  const socials = [
    {
      title: "Facebook",
      image: "/socials/facebook.svg",
      link: "https://www.facebook.com/PadiUMKM/",
    },
    {
      title: "Twitter",
      image: "/socials/twitter.svg",
      link: "https://twitter.com/PaDiUMKM",
    },
    {
      title: "Instagram",
      image: "/socials/instagram.svg",
      link: "https://www.instagram.com/PaDiUMKM/",
    },

    {
      title: "YouTube",
      image: "/socials/youtube.svg",
      link: "https://www.youtube.com/channel/UCNJxGqjubc_Immhn30yk6OA",
    },
  ];
  const payments = [
    {
      image: "/payments/bni.svg",
      alt: "BNI",
    },
    {
      image: "/payments/bri.svg",
      alt: "BRI",
    },
    {
      image: "/payments/mandiri.svg",
      alt: "Mandiri",
    },
    {
      image: "/payments/btn.svg",
      alt: "BTN",
    },
    {
      image: "/payments/qris.svg",
      alt: "QRIS",
    },
    {
      image: "/payments/linkaja.svg",
      alt: "LinkAja",
    },
    {
      image: "/payments/mastercard.svg",
      alt: "Mastercard",
    },
    {
      image: "/payments/visa.svg",
      alt: "Visa",
    },
  ];
  return (
    <footer className="h-screen w-full bg-[#F6F9FC] md:pt-14 md:px-8 p-4 pb-0 flex flex-col items-center">
      <div className="w-full md:flex justify-between md:space-y-0 space-y-8 md:px-24">
        <div className="flex flex-col space-y-4 mr-4">
          {about.map((item, index) => (
            <div key={index}>
              <div
                className={`${
                  item.isHead
                    ? "font-extrabold text-xl text-[#444B55] mb-2"
                    : "cursor-pointer hover:text-primary-500 text-sm text-[#808C92]"
                } font-ubuntu`}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-4 mr-4">
          {seller.map((item, index) => (
            <div key={index}>
              <div
                className={`${
                  item.isHead
                    ? "font-extrabold text-xl text-[#444B55] mb-2"
                    : "cursor-pointer hover:text-primary-500 text-sm text-[#808C92]"
                } font-ubuntu`}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-6 max-w-[455px]">
          <div className="font-extrabold text-xl text-[#444B55]">
            Hubungi Kami
          </div>
          <div className="text-sm text-[#808C92] flex flex-col space-y-2">
            <p>Gedung Telkom Divisi Digital Business & Technology</p>
            <p>
              Jl. Prof. DR. Soepomo No.139, RT.13/RW.2, Tebet Barat, Tebet,
              Jakarta Selatan, Jakarta 12810, Indonesia
            </p>
            <div className="flex divide-x-[1px] divide-paletteText-inactive justify-center xl:justify-start">
              <div className="pr-4">Senin - Jumat</div>
              <div className="flex items-center pl-4 space-x-4">
                <div>08:00 - 17:00 WIB</div>
              </div>
            </div>
            <div className="flex gap-2">
              {socials.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={item.image}
                    width={24}
                    height={24}
                    alt={item.title}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="text-[#808C92] space-y-2">
            <div className="text-sm font-semibold">
              Layanan Pengaduan Konsumen
            </div>
            <div className="text-sm font-semibold">PaDi UMKM</div>
            <div className="flex divide-x-[1px] divide-paletteText-inactive justify-center xl:justify-start">
              <div className="flex items-center space-x-1 text-sm">
                <Mail fill="#808C92" color="white" />
                <div className="text-sm">cs@padiumkm.id</div>
              </div>
            </div>
          </div>
          <div className="text-[#808C92] space-y-2">
            <div className="text-sm font-semibold">
              Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga
            </div>
            <div className="text-sm font-semibold">
              Kementerian Perdagangan RI
            </div>
            <div className="flex divide-x-[1px] divide-paletteText-inactive justify-center xl:justify-start">
              <div className="pr-4">
                <div className="flex items-center space-x-1 text-sm">
                  <Whatsapp color="#808C92" />
                  <div className="text-sm">+62 853 1111 1010</div>
                </div>
              </div>
              <div className="flex items-center pl-4 space-x-4">
                <div className="flex items-center space-x-1 text-sm">
                  <Mail fill="#808C92" color="white" />
                  <div className="text-sm">contact.us@kemendag.go.id</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full border-2 md:p-12 p-4 mt-14 space-y-6">
        <div className="text-xl font-ubuntu text-[#444B55] font-bold">
          Metode Pembayaran
        </div>
        <div className="grid md:grid-cols-8 grid-cols-3 items-center space-x-5">
          {payments.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="text-[#808C92] font-ubuntu my-[26px]">
          ©2022-2025 Pasar Digital UMKM Indonesia
        </div>
      </div>
    </footer>
  );
}
