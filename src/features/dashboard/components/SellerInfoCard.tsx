import { ArrowRight2, InfoCircle, Shop, Star } from "iconsax-react";

export default function SellerInfoCard() {
  return (
    <div className="px-8 py-5 h-fit rounded-lg bg-primary-50 w-full flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Shop size="32" variant="Bulk" color="#0092AE" />
        <div>
          <p className="body-small font-semibold">Nama Brand</p>
          <div className="flex items-center gap-2">
            <p>Rating Toko</p>
            <Star size="20" variant="Bulk" color="#FBD882" />
            <p>4.9</p>
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-center">Skor Rating</p>
        <div className="flex gap-2 justify-center items-center my-1">
          <p className="text-[#5CDF97] font-bold body-small">70</p>
          <InfoCircle size="22" color="#B1B5BA" />
        </div>
        <div className="flex justify-center items-center cursor-pointer">
          <p className="text-primary-500 font-semibold body-very-small">Detail Rating Toko</p>
          <ArrowRight2 size="18" color="#0092AE" />
        </div>
      </div>
      <div>
        <p className="font-semibold text-center">Rating Produk & Ulasan</p>
        <div className="flex gap-2 justify-center items-center my-1">
          <Star size="22" variant="Bulk" color="#FBD882" />
          <p className="body-small font-bold">4.9</p>
        </div>
        <div className="flex justify-center items-center cursor-pointer">
          <p className="text-primary-500 font-semibold body-very-small">Detail Rating Produk</p>
          <ArrowRight2 size="18" color="#0092AE" />
        </div>
      </div>
    </div>
  );
}
