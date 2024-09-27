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
    <div className="p-4 sm:p-6 lg:p-8"> {/* Add padding for responsiveness */}
      <h2 className="heading-6 md:text-left">Transaksi Terbaru</h2>
      <h3 className="body-small mt-3 md:text-left">
        Pantau status pesananmu melalui tabel di bawah ini
      </h3>
      <h4 className="body-very-small mt-3 text-gray-900 md:text-left">
        Terakhir update:
        <span className="text-primary-500"> {updatedAt ?? "-"}</span>
      </h4>
      <div className="w-full mt-3">
        <div className="flex flex-col md:flex-row justify-between items-start mb-5"> {/* Flex direction changes based on screen size */}
          <OrderStatusDropdown onChange={setStatusFilter} />
          <Link to="/orders" className="mt-3 md:mt-0"> {/* Margin-top for spacing on smaller screens */}
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
