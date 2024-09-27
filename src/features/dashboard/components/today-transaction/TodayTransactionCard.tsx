import { Button, Card } from "@legion-ui/core";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  Plugin,
} from "chart.js";
import { ArrowCircleRight2 } from "iconsax-react";
import { useOrder } from "@/context/OrderContext";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { fetchGPTResponse } from "@/api/gptApi";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TodayTransactionCard() {
  const { orderStatus, loading } = useOrder();
  const colors = ["#F04438", "#FCFF46", "#0092AE", "#2970FF", "#12B76A"];
  const [recommendation, setRecommendation] = useState("");
  const [loadingRecommendation, setLoadingRecommendation] = useState(false);

  const totalTransaction =
    orderStatus?.data.today?.reduce(
      (acc, curr) => acc + (curr.total || 0),
      0
    ) || 0;

  // Custom plugin to add text to the center of the doughnut chart
  const centerTextPlugin: Plugin<"doughnut"> = {
    id: "centerText",
    afterDraw(chart) {
      const { ctx, chartArea } = chart;

      ctx.save();
      ctx.font = `bold 1.5rem Nunito Sans`;
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const centerX = (chartArea.left + chartArea.right) / 2;
      const centerY = (chartArea.top + chartArea.bottom) / 2;

      ctx.fillText(`${totalTransaction} Transaksi`, centerX, centerY);
      ctx.restore();
    },
  };

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
    cutout: "80%", // Size of the hole in the middle
    plugins: {
      legend: {
        position: "right",
        align: "center",
      },
    },
    maintainAspectRatio: false, // Ensures the chart adjusts to container width
  };

  const handleGPTRequest = async () => {
    setLoadingRecommendation(true);
    try {
      const prompt = `Berikan saya analisis tentang data saya dan berikan rekomendasi untuk meningkatkan transaksi saya berdasarkan data (jelaskan dalam 1 dan maksimal 3 kalimat): ${JSON.stringify(
        orderStatus?.data.today
      )}`;
      const response = await fetchGPTResponse(prompt);
      setRecommendation(response);
    } catch (error) {
      console.error("Failed to fetch recommendation:", error);
      setRecommendation("Failed to get a recommendation.");
    } finally {
      setLoadingRecommendation(false);
    }
  };

  return (
    <Card
      className="w-full h-fit"
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
        <Button
          className="primary-color"
          block
          onClick={handleGPTRequest}
          disabled={loadingRecommendation}
        >
          <div className="flex justify-center items-center w-full gap-3">
            {loadingRecommendation ? (
              <span className="text-white">Loading...</span>
            ) : (
              <>
                <p className="font-medium">
                  Rekomendasi untuk mengelola transaksi toko Anda
                </p>
                <ArrowCircleRight2 size="24" color="white" variant="Bold" />
              </>
            )}
          </div>
        </Button>
      }
    >
      {loading ? (
        <div className="p-4">
          <Skeleton className="h-40" />
        </div>
      ) : (
        <div className="p-4">
          <div className="relative flex justify-center items-center w-full h-72">
            <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
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
          {recommendation && (
            <div className="mt-4 text-gray-900">{recommendation}</div>
          )}
        </div>
      )}
    </Card>
  );
}
