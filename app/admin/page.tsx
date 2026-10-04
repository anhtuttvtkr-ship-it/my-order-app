import React from 'react';

export default function AdminPage() {
  const stats = [
    { label: 'Doanh thu hôm nay', val: '24,850,000 đ', sub: '+18% so với hôm qua', color: 'text-emerald-400' },
    { label: 'Đơn hàng mới', val: '42 đơn', sub: '12 đơn chờ cắt thịt', color: 'text-amber-400' },
    { label: 'Tồn kho Thịt Bò Úc/Mỹ', val: '185.5 kg', sub: 'Cần nhập thêm Ba Chỉ Bò', color: 'text-red-400' },
    { label: 'Sốt & Combo Lẩu', val: '98 bộ', sub: 'Sẵn sàng giao', color: 'text-blue-400' },
  ];

  const recentOrders = [
    { id: '#CH-8801', customer: 'Anh Minh (Quản Hóa)', items: '2kg Ba chỉ bò Mỹ + 1 Combo Lẩu Thái', total: '670,000 đ', status: 'Chờ duyệt' },
    { id: '#CH-8802', customer: 'Chị Hoa (Thanh Hóa)', items: '1.5kg Dẻ sườn bò Úc', total: '540,000 đ', status: 'Đang cắt thịt' },
    { id: '#CH-8803', customer: 'Quán Nướng Bò Xèo', items: '10kg Lõi vai bò Mỹ (Nguyên khối)', total: '2,900,000 đ', status: 'Đã hoàn thành' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 md:p-8 font-sans">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-zinc-800 gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse"></span>
            <h1 className="text-2xl font-black text-white uppercase tracking-wider">CƯỜNG HUỆ FOODS</h1>
          </div>
          <p className="text-xs text-zinc-400 mt-1">Cổng Quản Trị Hệ Thống & Kiểm Soát Doanh Thu (Admin)</p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="bg-red-950 text-red-400 border border-red-800/60 text-xs px-3 py-1 rounded-full font-bold">
            Quyền Admin
          </span>
        </div>
      </header>

      {/* Thống kê */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-zinc-900/90 border border-zinc-800/80 p-5 rounded-2xl">
            <p className="text-xs text-zinc-400 font-medium">{s.label}</p>
            <p className="text-2xl font-black text-white my-2">{s.val}</p>
            <p className={`text-xs font-semibold ${s.color}`}>{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Bảng đơn hàng */}
      <div className="bg-zinc-900/90 border border-zinc-800/80 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center">
          <span className="mr-2">📦</span> Đơn Đặt Thịt Tươi & Thực Phẩm Mới Nhất
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-zinc-300">
            <thead className="text-xs uppercase bg-zinc-950 text-zinc-400 border-b border-zinc-800">
              <tr>
                <th className="p-3">Mã đơn</th>
                <th className="p-3">Khách hàng</th>
                <th className="p-3">Sản phẩm đặt</th>
                <th className="p-3">Tổng tiền</th>
                <th className="p-3">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {recentOrders.map((ord) => (
                <tr key={ord.id} className="hover:bg-zinc-800/30 transition-colors">
                  <td className="p-3 font-bold text-red-400">{ord.id}</td>
                  <td className="p-3 font-medium text-white">{ord.customer}</td>
                  <td className="p-3 text-zinc-300">{ord.items}</td>
                  <td className="p-3 font-bold text-emerald-400">{ord.total}</td>
                  <td className="p-3">
                    <span className="bg-zinc-800 text-zinc-300 text-xs px-2.5 py-1 rounded-md border border-zinc-700">
                      {ord.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}