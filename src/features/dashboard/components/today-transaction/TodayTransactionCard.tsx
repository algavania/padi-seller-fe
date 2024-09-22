import { Button, Card } from "@legion-ui/core";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from "chart.js";
import { ArrowCircleRight2 } from "iconsax-react";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TodayTransactionCard() {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
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
      <Doughnut data={data} options={options} />
    </Card>
  );
}
