import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "iconsax-react";

interface OrderStatusDropdownProps {
  onChange: (value: string | null) => void;
}

export default function OrderStatusDropdown({ onChange }: OrderStatusDropdownProps) {
  const handleSelectChange = (value: string) => {
    onChange(value === "Semua" ? null : value);
  };

  return (
    <div>
      <p className="body-small font-semibold mb-3">Status pesanan</p>
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="w-[300px]">
          <div className="flex items-center gap-2">
            <Filter size="24" color="#0A0A0B" variant="Bold" />
            <SelectValue placeholder="Pilih status pesanan" />
          </div>
        </SelectTrigger>
        <SelectContent side="bottom">
          <SelectItem value="Semua">Semua</SelectItem>
          <SelectItem value="Pesanan Baru">Pesanan Baru</SelectItem>
          <SelectItem value="Diproses Penjual">Diproses Penjual</SelectItem>
          <SelectItem value="Siap Penagihan">Siap Penagihan</SelectItem>
          <SelectItem value="Siap Dikirim">Siap Dikirim</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
