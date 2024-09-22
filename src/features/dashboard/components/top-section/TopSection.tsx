import { Calendar } from "iconsax-react";
import moment from "moment";

export default function TopSection() {
  const today = moment().format("DD/MM/YYYY");

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="heading-4">Dashboard</h1>
        <div className="border border-[#D0D5DD] bg-[#F9FAFB] px-3 flex items-center rounded-xl gap-2">
          <Calendar size="24" color="#667085" />
          <p className="body-small">{today}</p>
        </div>
      </div>
      <h2 className="heading-6 mt-5">Hai, selamat datang kembali!</h2>
      <h3 className="body-small mt-3">
        Cek pesanan di tokomu untuk menjaga kepuasan pelanggan!
      </h3>
    </div>
  );
}
