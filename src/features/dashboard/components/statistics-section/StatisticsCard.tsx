import { Button, Card } from "@legion-ui/core";
import { ArrowCircleRight2 } from "iconsax-react";
import { HelpCircle, MoveDown } from "lucide-react";
import { useState } from "react";

export default function StatisticsCard() {
  const [recommendation, setRecommendation] = useState("");
  return (
    <Card
      bordered
      className="min-w-full"
      header={
        <div className="grid grid-cols-7">
          <div className="col-span-3">
            <div className="flex justify-start items-center gap-3">
              <p className="font-bold body-small text-gray-900">
                Pesanan Hari Ini
              </p>
              <HelpCircle size="20" fill="#C1C4C8" color="white" />
            </div>
            <p className="text-gray-900 heading-5">10</p>
            <div className="flex gap-3 justify-start items-center">
              <div className="bg-danger-100 rounded-full px-2 py-1 flex gap-1 items-center justify-center">
                <MoveDown
                  strokeWidth={3}
                  className="text-danger-500"
                  size={14}
                />
                <p className="text-danger-500 body-very-small font-semibold">
                  5%
                </p>
              </div>
              <p className="text-gray-500 body-very-small">
                dari minggu kemarin
              </p>
            </div>
          </div>
          <div className="col-span-4 bg-danger-100"></div>
        </div>
      }
    >
      <Button className="primary-color" block>
        <div className="flex justify-center items-center w-full gap-3">
          <p className="font-medium">
            Rekomendasi untuk meningkatkan pesanan di toko Anda
          </p>
          <ArrowCircleRight2 size="24" color="white" variant="Bold" />
        </div>
      </Button>
      {recommendation && (
        <div className="mt-2 text-gray-900">{recommendation}</div>
      )}
    </Card>
  );
}
