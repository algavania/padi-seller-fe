import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "iconsax-react";

export default function OrderStatusDropdown() {
  return (
    <div>
      <p className="body-small font-semibold mb-3">Status pesanan</p>
      <Select>
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
