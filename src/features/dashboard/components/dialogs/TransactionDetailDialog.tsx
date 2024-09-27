import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Avatar } from "@legion-ui/core";
import Chip from "../Chip";
import moment from "moment";
import { formatRupiah } from "@/utils/currencyFormatter";
import { Profile } from "iconsax-react";

interface TransactionDetailDialogProps {
  isOpen: boolean;
  order: any;
  chipBg: string;
  chipColor: string;
  onClose: () => void;
}

const TransactionDetailDialog: React.FC<TransactionDetailDialogProps> = ({
  isOpen,
  order,
  chipBg,
  chipColor,
  onClose,
}) => {
  if (!isOpen) return null; 

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent className="bg-white max-w-full w-full sm:w-full md:w-1/2">
        <DialogTitle>
          <p className="font-bold text-center">Detail Transaksi</p>
        </DialogTitle>
        <DialogDescription>
          <div>
          <div className="w-full border my-3"></div>
            <div className="flex justify-between items-center">
              <div>
                <div className="flex gap-2">
                  <Avatar 
                              icon={<Profile size="32" variant="Bold" color="white" />}
                  style={{ backgroundColor: "#0092AE" }} size="md" />
                  <div className="flex flex-col gap">
                    <p>{order.users.profile.name}</p>
                    <p>PT Pertamina</p>
                    <p>{`${order.shipping_address.province}, ${order.shipping_address.city}`}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Chip label="Pembayaran Tempo" bgColor="#FFF5EA" textColor="#F7931E" />
                <Chip label="Bisnis" bgColor="#E6F4F7" textColor="#0092AC" />
              </div>
            </div>
            <div className="w-full border border-dashed my-3"></div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">No. Sales Order:</p>
                <p>{order.sales_order_number}</p>
              </div>
              <div>
                <p className="font-bold">Pesanan Masuk:</p>
                <p>{moment(order.createdAt).locale('id').format('D MMMM YYYY, HH:mm')}</p>
              </div>
              <div>
                <Chip label={order.status.name} bgColor={chipBg} textColor={chipColor} />
              </div>
            </div>
            <div className="w-full border border-dashed my-3"></div>
            <div className="flex justify-between items-start">
              <div className="flex gap-2">
                <img className="object-contain" src={order.product_detail.image} style={{width: '10rem'}}></img>
                <div className="flex flex-col gap-1">
                  <p className="font-bold">{order.product_detail.name}</p>
                  <p>{`${order.product_detail.quantity}${order.product_detail.unit} x ${formatRupiah(order.product_detail.price_per_item)}`}</p>
                  <Chip bgColor="#E6F4F7" textColor="#0092AE" label={`Harga Jual: ${formatRupiah(order.product_detail.price_per_item)}`} />
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-start items-start">
                <div>
                  <p>Total Nilai Produk</p>
                  <p className="font-bold">{formatRupiah(order.price_subtotal)}</p>
                </div>
                <div>
                  <p>Total Pendapatan Produk</p>
                  <p className="font-bold">{formatRupiah(order.price_total)}</p>
                </div>
              </div>
            </div>
          </div>
        </DialogDescription>
        <DialogClose asChild>
          <button className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg">
            Cek Status Pesanan
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionDetailDialog;
