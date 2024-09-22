import { Button, Card } from "@legion-ui/core";
import ImportantInfoItem from "./ImportantInfoItem";

export default function ImportantInfoCard() {
  const info1 =
    "Batas waktu respon pesanan baru adalah 4 x 24 jam (hari kerja: Senin s.d. Jumat) untuk semua pilihan kurir sebelum pesanan tersebut dibatalkan.";
  const info2 =
    "Batas waktu respon pesanan diproses adalah 3 x 24 jam (hari kerja: Senin s.d. Jumat) untuk semua pilihan kurir sebelum pesanan tersebut dibatalkan.";
  return (
    <Card bordered className="important-info-w" color="#DBDDDF">
      <h2 className="body-large font-bold">Info Penting</h2>
      <div
        className="flex flex-col gap-4 mt-3 px-3 overflow-y-auto"
        style={{ maxHeight: "200px" }} 
      >
        <ImportantInfoItem title={info1} />
        <ImportantInfoItem title={info2} />
      </div>
      <p className="body-small font-medium text-primary-500 cursor-pointer mt-3">Lihat selengkapnya</p>
    </Card>
  );
}
