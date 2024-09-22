import { Button } from "@legion-ui/core";
import OrderStatusDropdown from "./OrderStatusDropdown";
import { ArrowCircleRight2 } from "iconsax-react";
import OrderTable from "./OrderTable";

export default function NewestTransactionSection() {
  return (
    <div>
      <h2 className="heading-6">Transaksi Terbaru</h2>
      <h3 className="body-small mt-3">
        Pantau status pesananmu melalui tabel di bawah ini
      </h3>
      <h4 className="body-very-small mt-3 text-gray-900">
        Terakhir update:
        <span className="text-primary-500">02 September 2024, 12:00 WIB</span>
      </h4>
      <div className="w-full mt-3">
        <div className="flex justify-between items-end mb-5">
          <OrderStatusDropdown />
          <Button
            variant="outline"
            style={{ color: "#0092AE!important" }}
            iconRight={
              <ArrowCircleRight2 size="24" color="#0092AE" variant="Outline" />
            }
          >
            Lihat Semua Pesanan
          </Button>
        </div>
        <OrderTable />
      </div>
    </div>
  );
}
