import { Button } from "@legion-ui/core";
import OrderStatusDropdown from "./OrderStatusDropdown";
import { ArrowCircleRight2 } from "iconsax-react";
import OrderTable from "./OrderTable";
import { useOrder } from "@/context/OrderContext";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NewestTransactionSection() {
  const { updatedAt } = useOrder();
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  return (
    <div>
      <h2 className="heading-6">Transaksi Terbaru</h2>
      <h3 className="body-small mt-3">
        Pantau status pesananmu melalui tabel di bawah ini
      </h3>
      <h4 className="body-very-small mt-3 text-gray-900">
        Terakhir update:
        <span className="text-primary-500"> {updatedAt ?? "-"}</span>
      </h4>
      <div className="w-full mt-3">
        <div className="flex justify-between items-end mb-5">
          <OrderStatusDropdown onChange={setStatusFilter} />
          <Link to="/orders">
            <Button
              variant="outline"
              style={{ color: "#0092AE!important" }}
              iconRight={
                <ArrowCircleRight2
                  size="24"
                  color="#0092AE"
                  variant="Outline"
                />
              }
            >
              Lihat Semua Pesanan
            </Button>
          </Link>
        </div>
        <OrderTable statusFilter={statusFilter} limit={5} />
      </div>
    </div>
  );
}
