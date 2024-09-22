import { InfoCircle } from "iconsax-react";

export default function ImportantInfoItem({ title }: { title: string }) {
  return (
    <div className="rounded-xl bg-[#FFE4BF] text-gray-900 py-4 px-3 flex justify-center items-center gap-2">
      <InfoCircle size="32" color="#E89523" variant="Bold" className="w-1/2" />
      <p>{title}</p>
    </div>
  );
}
