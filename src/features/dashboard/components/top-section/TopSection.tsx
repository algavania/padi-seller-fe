import { Calendar } from "iconsax-react";
import moment from "moment";

export default function TopSection() {
  const today = moment().format("DD/MM/YYYY");

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h1 className="heading-4 text-left md:text-right w-full md:w-auto">Dashboard</h1>
        <div className="border border-[#D0D5DD] bg-[#F9FAFB] px-3 py-2 flex items-center rounded-xl gap-2 mt-4 md:mt-0">
          <Calendar size="24" color="#667085" />
          <p className="body-small">{today}</p>
        </div>
      </div>
      <h2 className="heading-6 mt-5 text-left">Hai, selamat datang kembali!</h2>
      <h3 className="body-small mt-3 text-left">
        Cek pesanan di tokomu untuk menjaga kepuasan pelanggan!
      </h3>
    </div>
  );
}
