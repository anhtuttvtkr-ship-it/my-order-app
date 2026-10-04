import React from 'react';

export default function LinkPage() {
  const menu = [
    { name: 'Ba Chỉ Bò Mỹ Nhập Khẩu', price: '185,000 đ', unit: '500g', desc: 'Thịt cuộn cuộn tròn đẹp mắt, thích hợp nhúng lẩu, nướng BBQ', tag: 'Bán chạy nhất' },
    { name: 'Dẻ Sườn Bò Úc Tươi', price: '240,000 đ', unit: '500g', desc: 'Đậm vị, thịt mềm ngậy, chuyên dùng cho món nướng', tag: 'Thịt tươi' },
    { name: 'Combo Lẩu Bò Cường Huệ', price: '399,000 đ', unit: 'Sét 2-3 người', desc: 'Gồm ba chỉ bò, dẻ sườn, rau nấm và nước lẩu độc quyền', tag: 'Combo HOT' },
    { name: 'Sốt Chấm Lẩu & Nướng Độc Quyền', price: '35,000 đ', unit: 'Hũ 250g', desc: 'Công thức độc quyền thơm ngon chuẩn vị', tag: 'Gia vị' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans pb-12">
      {/* Banner Top */}
      <div className="bg-red-950/80 border-b border-red-900/50 p-3 text-center text-xs font-semibold text-red-300">
        🔥 CƯỜNG HUỆ FOODS: Miễn phí giao hàng cho đơn thịt tươi từ 500,000đ!
      </div>

      {/* Header */}
      <header className="max-w-2xl mx-auto px-4 pt-8 pb-6 text-center">
        <h1 className="text-3xl font-black text-white uppercase tracking-tight">CƯỜNG HUỆ FOODS</h1>
        <p className="text-xs text-zinc-400 mt-1">Đặt Thịt Bò Úc/Mỹ Tươi Sạch & Combo Lẩu Nướng Giao Tận Nhà</p>
      </header>

      {/* Danh sách thực đơn */}
      <main className="max-w-2xl mx-auto px-4 space-y-4">
        {menu.map((item, idx) => (
          <div key={idx} className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-5 flex justify-between items-start gap-4">
            <div className="space-y-1">
              <span className="text-[10px] bg-red-950 text-red-400 border border-red-800/50 px-2 py-0.5 rounded-md font-bold">
                {item.tag}
              </span>
              <h3 className="font-bold text-white text-base pt-1">{item.name}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
              <div className="flex items-baseline space-x-2 pt-2">
                <span className="text-base font-extrabold text-emerald-400">{item.price}</span>
                <span className="text-xs text-zinc-500">/ {item.unit}</span>
              </div>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-colors shrink-0">
              + Đặt Món
            </button>
          </div>
        ))}
      </main>

      {/* Giỏ hàng cố định phía dưới */}
      <div className="fixed bottom-4 left-0 right-0 max-w-2xl mx-auto px-4">
        <div className="bg-red-600 text-white p-4 rounded-2xl shadow-2xl flex justify-between items-center">
          <div>
            <p className="text-xs opacity-80">Đã chọn 0 món</p>
            <p className="text-lg font-black">0 đ</p>
          </div>
          <button className="bg-white text-red-600 font-black px-5 py-2.5 rounded-xl text-xs uppercase">
            Xem Giỏ Hàng
          </button>
        </div>
      </div>
    </div>
  );
}