import OrderStatusItem from "./OrderStatusItem";

export default function OrderStatusSection() {
  const orderStatus = [
    {
      title: "Pesanan Baru",
      total: 10,
    },
    {
      title: "Diproses",
      total: 3,
    },
    {
      title: "Siap Dikirim",
      total: 5,
    },
    {
      title: "Siap Penagihan",
      total: 4,
    },
  ];
  return (
    <div>
      <h2 className="heading-6">Jumlah Pesanan Per Status</h2>
      <h3 className="body-small mt-3">
        Pantau jumlah pesananmu di setiap status pesanan untuk menjaga pelayanan
        tokomu
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {orderStatus.map((status, index) => (
          <OrderStatusItem key={index} title={status.title} total={status.total} />
        ))}
      </div>
    </div>
  );
}
