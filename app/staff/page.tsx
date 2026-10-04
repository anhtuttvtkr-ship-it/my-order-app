import React from 'react';

export default function StaffPage() {
  const kitchenOrders = [
    {
      id: '#CH-8801',
      type: 'Đơn giao tận nơi',
      items: [
        '2kg Ba chỉ bò Mỹ (Yêu cầu: Thái mỏng nhúng lẩu)',
        '1 Hũ sốt chấm lẩu Cường Huệ',
      ],
      time: '5 phút trước',
      status: 'Chờ cắt thịt',
    },
    {
      id: '#CH-8802',
      type: 'Khách chờ tại quầy',
      items: [
        '1.5kg Dẻ sườn bò Úc (Yêu cầu: Cắt khúc nướng BBQ)',
      ],
      time: '12 phút trước',
      status: 'Đang chế biến',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 md:p-8 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center pb-6 border-b border-zinc-800">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xl">🥩</span>
            <h1 className="text-2xl font-black text-amber-500 uppercase">KHU VỰC CẮT THỊT & SOẠN HÀNG</h1>
          </div>
          <p className="text-xs text-zinc-400 mt-1">Cường Huệ Foods - Màn hình dành riêng cho Nhân viên (Staff)</p>
        </div>
        <span className="bg-amber-950 text-amber-400 border border-amber-800/60 text-xs px-3 py-1.5 rounded-xl font-bold">
          Khu Bếp / Sơ Chế
        </span>
      </header>

      {/* Danh sách đơn cần làm */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {kitchenOrders.map((ord) => (
          <div key={ord.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-2xl font-black text-amber-400">{ord.id}</span>
                  <p className="text-xs text-zinc-400 mt-0.5">{ord.type} • {ord.time}</p>
                </div>
                <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-semibold px-3 py-1 rounded-lg">
                  {ord.status}
                </span>
              </div>

              <div className="space-y-2 mb-6">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Yêu cầu sơ chế:</p>
                {ord.items.map((item, idx) => (
                  <div key={idx} className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 text-sm font-medium text-zinc-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold py-3 rounded-xl text-sm transition-colors">
              ✓ Hoàn Thành Sơ Chế & Chuyển Đơn
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}