import React from 'react';

export default function LinkPage() {
  const categories = [
    {
      title: '🥩 Thực Phẩm Tươi Sống',
      items: [
        { name: 'Thịt Bò Tươi Sạch', price: '140,000 đ', unit: '500g', tag: 'Sạch & An toàn' },
        { name: 'Thịt Lợn Sạch Ngon', price: '85,000 đ', unit: '500g', tag: 'Tươi mới' },
      ],
    },
    {
      title: '🥗 Set Sơ Chế Sẵn (Nấu Ngay)',
      items: [
        { name: 'Set Lẩu Bò Nấu Nhanh', price: '250,000 đ', unit: 'Set 2-3 người', tag: 'Tiện lợi' },
        { name: 'Set Canh / Xào Chế Biến Sẵn', price: '65,000 đ', unit: 'Khay', tag: 'Tiết kiệm' },
      ],
    },
    {
      title: '🍱 Đồ Ăn Chín (Cơm Nhà)',
      items: [
        { name: 'Cơm Món Chuẩn Vị Nhà Làm', price: '45,000 đ', unit: 'Suất', tag: 'Cập nhật mỗi ngày' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans pb-24">
      {/* Banner Top nhận diện */}
      <div className="bg-emerald-700 text-white p-3 text-center text-xs font-bold">
        🌿 CƯỜNG HUỆ FOODS: 20 Năm Kinh Nghiệm • 523 Nguyễn Trãi, Thanh Hóa
      </div>

      {/* Header */}
      <header className="max-w-2xl mx-auto px-4 pt-6 pb-4 text-center">
        <h1 className="text-3xl font-black text-emerald-400 uppercase tracking-tight">THỰC PHẨM SẠCH CƯỜNG HUỆ</h1>
        <p className="text-xs text-zinc-400 mt-1">Chất lượng – An toàn – Tiện lợi – Vì sức khỏe</p>
        
        <div className="mt-3 flex justify-center gap-2 text-[11px] text-zinc-300">
          <a href="tel:0832865060" className="bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-full text-emerald-400 font-semibold">
            📞 0832 865 060
          </a>
          <a href="https://zalo.me/g/fkjggh648" target="_blank" rel="noreferrer" className="bg-blue-950 border border-blue-800 px-2.5 py-1 rounded-full text-blue-400 font-semibold">
            💬 Nhóm Zalo Đồ Ăn Chín
          </a>
        </div>
      </header>

      {/* Danh sách thực đơn */}
      <main className="max-w-2xl mx-auto px-4 space-y-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-3">
            <h2 className="text-base font-bold text-emerald-400 border-b border-zinc-800 pb-2">
              {cat.title}
            </h2>
            <div className="space-y-3">
              {cat.items.map((item, itemIdx) => (
                <div key={itemIdx} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800/50 px-2 py-0.5 rounded-md font-bold">
                      {item.tag}
                    </span>
                    <h3 className="font-bold text-white text-sm mt-1">{item.name}</h3>
                    <p className="text-xs font-bold text-emerald-400 mt-1">
                      {item.price} <span className="text-zinc-500 font-normal">/ {item.unit}</span>
                    </p>
                  </div>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition-colors shrink-0">
                    + Thêm
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* Thanh giỏ hàng cố định */}
      <div className="fixed bottom-4 left-0 right-0 max-w-2xl mx-auto px-4">
        <div className="bg-emerald-600 text-white p-4 rounded-2xl shadow-2xl flex justify-between items-center">
          <div>
            <p className="text-xs opacity-90">Đã chọn 0 món</p>
            <p className="text-lg font-black">0 đ</p>
          </div>
          <button className="bg-white text-emerald-800 font-black px-5 py-2.5 rounded-xl text-xs uppercase shadow-md">
            Xem Giỏ Hàng
          </button>
        </div>
      </div>
    </div>
  );
}