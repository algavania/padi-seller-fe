import { ArrowRight2, InfoCircle, Shop, Star } from "iconsax-react";

export default function SellerInfoCard() {
  return (
    <div className="px-4 md:px-6 py-5 rounded-lg bg-primary-50 w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div className="flex items-center gap-2 w-full md:flex-1">
        {" "}
        {/* Allow this div to grow equally */}
        <Shop
          className="hidden lg:block"
          size="32"
          variant="Bulk"
          color="#0092AE"
        />
        <div className="flex flex-col w-full">
          <p className="body-small font-semibold">24 Shop</p>
          <div className="flex items-center gap-2">
            <p className="text-sm md:text-base">Rating Toko</p>
            <Star size="20" variant="Bulk" color="#FBD882" />
            <p className="text-sm md:text-base">4.9</p>
          </div>
        </div>
      </div>

      {/* Add new children here with the same structure to ensure equal widths */}
      <div className="flex-1 text-left md:text-center">
        {" "}
        {/* New child for example */}
        <p className="font-semibold text-sm md:text-base">Skor Rating</p>
        <div className="flex gap-2 justify-start md:justify-center items-center my-1">
          <p className="text-[#5CDF97] font-bold text-sm md:text-base">70</p>
          <InfoCircle size="22" color="#B1B5BA" />
        </div>
        <div className="flex justify-start md:justify-center items-center cursor-pointer">
          <p className="text-primary-500 font-semibold text-xs md:text-sm">
            Detail Rating Toko
          </p>
          <ArrowRight2 size="18" color="#0092AE" />
        </div>
      </div>

      <div className="flex-1 text-left md:text-center">
        {" "}
        {/* Another child for example */}
        <p className="font-semibold text-sm md:text-base">
          Rating Produk & Ulasan
        </p>
        <div className="flex gap-2 justify-start md:justify-center items-center my-1">
          <Star size="22" variant="Bulk" color="#FBD882" />
          <p className="font-bold text-sm md:text-base">4.9</p>
        </div>
        <div className="flex justify-start md:justify-center items-center cursor-pointer">
          <p className="text-primary-500 font-semibold text-xs md:text-sm">
            Detail Rating Produk
          </p>
          <ArrowRight2 size="18" color="#0092AE" />
        </div>
      </div>
    </div>
  );
}
