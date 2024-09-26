// src/components/Dialog.tsx
import React from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { useOrder } from '@/context/OrderContext';

interface MyDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewTransactionDialog: React.FC<MyDialogProps> = ({ isOpen, onClose }) => {
    const { orderStatus } = useOrder();
    const pesananBaruEntry = orderStatus?.data.today.find((entry) => entry.status === "Pesanan Baru");

  return (
    <Dialog open={isOpen && (pesananBaruEntry?.total ?? 0) > 0} onOpenChange={onClose}>
      <DialogContent className='bg-white'>
        <DialogDescription>
          <div className='text-center'>
            <img alt="Cek Pesanan" className='flex justify-center items-center w-full object-contain' style={{height: "10rem",}} src="/dashboard/search.svg" />
            <p className='heading-7 mt-4'>Segera Cek Pesanan Anda!</p>
            <p className='my-4 heading-5 text-primary-500'>Ada {pesananBaruEntry?.total} pesanan yang harus segera diproses!</p>
            <p className='body-medium'>Berikan pelayanan terbaikmu untuk meningkatkan kepuasan pelanggan dengan selalu mengecek status pesanan toko Anda!</p>
          </div>
        </DialogDescription>
        <DialogClose asChild>
          <button className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg">Cek Status Pesanan</button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default NewTransactionDialog;
