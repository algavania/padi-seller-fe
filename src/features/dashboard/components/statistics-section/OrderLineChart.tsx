// OrderLineChart.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { OrderStatus } from "@/models/order";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface OrderLineChartProps {
  orders: OrderStatus[] | undefined;
}

const OrderLineChart: React.FC<OrderLineChartProps> = ({ orders }) => {
  if (orders === undefined) {
    return <div></div>;
  }
  const labels = orders.map((order) => order.date);
  const dataValues = orders.map((order) => order.value);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Orders",
        data: dataValues,
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        pointRadius: 0,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        callbacks: {
          label: (context: any) => {
            const label = context.dataset.label || "";
            const value = context.raw;
            return `${label}: ${value}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <div style={{ height: "7rem", width: "100%" }}> {/* Set height here */}
      <Line data={data} options={options} />
    </div>
  );
};

export default OrderLineChart;
