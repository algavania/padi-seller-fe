import { Card } from "@legion-ui/core";
import { ArrowRight2 } from "iconsax-react";

export default function OrderStatusItem({
  title,
  total,
}: {
  title: string;
  total: number;
}) {
  return (
    <Card bordered>
      <div className="flex items-center justify-between text-gray-900 w-full">
        <div className="font-semibold">{title}</div>
        <ArrowRight2 size="18" color="#0092AE" />
      </div>
      <p className="heading-4 text-gray-900">{total}</p>
    </Card>
  );
}
