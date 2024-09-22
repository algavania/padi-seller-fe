import { Button, Card } from "@legion-ui/core";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { ArrowCircleRight2 } from "iconsax-react";
import { useOrder } from "@/context/OrderContext";
import { Skeleton } from "@/components/ui/skeleton"; // Adjust this import based on your folder structure

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TodayTransactionCard() {
  const { orderStatus, loading } = useOrder();
  const colors = ["#F04438", "#FCFF46", "#0092AE", "#2970FF", "#12B76A"];

  const data = {
    labels: orderStatus?.data.today.map((status) => status.status),
    datasets: [
      {
        label: "Total",
        data: orderStatus?.data.today.map((status) => status.total), 
        backgroundColor: colors,
        borderColor: ["#F2F4F7", "#F2F4F7", "#F2F4F7", "#F2F4F7", "#F2F4F7"],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    cutout: "80%",
    plugins: {
      legend: {
        position: "right",
        align: "center",
      },
    },
  };
  const totalTransaction =
    orderStatus?.data.today?.reduce(
      (acc, curr) => acc + (curr.total || 0),
      0
    ) || 0;

  return (
    <Card
      className="w-full"
      bordered
      header={
        <div>
          <p className="font-bold body-medium">Transaksi Hari Ini</p>
          <p className="text-[#86909C] body-very-small">
            Status transaksi harian kamu
          </p>
        </div>
      }
      footer={
        <Button className="primary-color" block>
          <div className="flex justify-center items-center w-full gap-3">
            <p className="font-medium">
              Rekomendasi untuk mengelola transaksi toko Anda
            </p>
            <ArrowCircleRight2 size="24" color="white" variant="Bold" />
          </div>
        </Button>
      }
    >
      {loading ? (
        <div className="p-4">
          <Skeleton className="h-40" />{" "}
          {/* Adjust height based on your design */}
        </div>
      ) : (
        <div>
          <div className="relative flex justify-center items-center">
            {" "}
            {/* Position relative for absolute positioning */}
            <Doughnut data={data} options={options} />
            <div
              style={{ left: "9.6rem" }}
              className="absolute flex flex-col justify-center items-center"
            >
              <p className="body-large text-[#667085]">Total Transaksi</p>
              <p className="heading-4">{totalTransaction}</p>
            </div>
          </div>
          {orderStatus?.data.today.map((status, index) => (
            <div key={status.status} className="flex justify-between mt-3">
              <div className="flex gap-3 justify-start items-center">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: colors[index] }} 
                ></div>
                <p className="body-medium">{status.status}</p>
              </div>
              <p className="body-medium font-bold text-gray-900">
                {status.total} transaksi
              </p>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
