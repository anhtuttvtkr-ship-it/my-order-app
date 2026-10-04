import React from 'react';

export default function Home() {
  const portals = [
    {
      title: 'Quản Lý Admin',
      description: 'Quản lý kho hàng thực phẩm sạch, giá bán, báo cáo doanh thu và cấu hình hệ thống.',
      url: 'https://admin.cuonghuefoods.com',
      badge: 'Admin',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      icon: '📊',
    },
    {
      title: 'Cổng Nhân Viên (POS)',
      description: 'Giao diện soạn hàng, sơ chế thịt tươi, chuẩn bị set đồ ăn và xử lý đơn.',
      url: 'https://staff.cuonghuefoods.com',
      badge: 'Staff',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      icon: '🔪',
    },
    {
      title: 'Đặt Hàng Trực Tuyến',
      description: 'Kênh đặt thực phẩm tươi sống, set sơ chế sẵn, đồ ăn chín giao tận nhà.',
      url: 'https://link.cuonghuefoods.com',
      badge: 'Khách Hàng',
      badgeColor: 'bg-green-500/10 text-green-400 border-green-500/30',
      icon: '🛒',
    },
    {
      title: 'Hệ Thống Dùng Thử',
      description: 'Môi trường thử nghiệm tính năng mới và cập nhật bảng giá khuyến mãi.',
      url: 'https://demo.cuonghuefoods.com',
      badge: 'Demo',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      icon: '⚡',
    },
  ];

  const categories = [
    '🥩 Thực phẩm tươi sống (Bò, Lợn)',
    '🥗 Set thực phẩm sơ chế sẵn',
    '🍱 Đồ ăn chín (Cơm nhà)',
    '🥦 Cửa hàng thực phẩm tự nhiên',
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-between p-4 md:p-8 font-sans">
      {/* Header */}
      <header className="max-w-5xl mx-auto w-full flex flex-col items-center text-center space-y-4 pt-6 pb-4">
        <div className="flex items-center space-x-2 bg-emerald-950/80 border border-emerald-800/50 px-4 py-1.5 rounded-full">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Chất lượng – An toàn – Tiện lợi – Vì sức khỏe
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
          THỰC PHẨM SẠCH <span className="text-emerald-500">CƯỜNG HUỆ</span>
        </h1>
        
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">
          Với 20 năm kinh nghiệm trong ngành thực phẩm, Cường Huệ Foods mang đến các sản phẩm an toàn, tiện lợi cho mọi gia đình.
        </p>

        {/* Danh mục danh mục */}
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {categories.map((cat, idx) => (
            <span
              key={idx}
              className="text-xs bg-zinc-900 border border-zinc-800 text-emerald-300 px-3 py-1.5 rounded-lg hover:border-emerald-500/50 transition-colors"
            >
              {cat}
            </span>
          ))}
        </div>
      </header>

      {/* Grid danh sách cổng truy cập */}
      <section className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        {portals.map((portal) => (
          <a
            key={portal.badge}
            href={portal.url}
            className="group relative p-6 bg-zinc-900/80 border border-zinc-800/80 rounded-2xl transition-all duration-300 hover:border-emerald-500/60 hover:bg-zinc-900 hover:shadow-2xl hover:shadow-emerald-950/20 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl p-2 bg-zinc-950 rounded-xl border border-zinc-800">
                    {portal.icon}
                  </span>
                  <h2 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                    {portal.title}
                  </h2>
                </div>
                <span
                  className={`text-xs px-2.5 py-1 rounded-md border font-semibold ${portal.badgeColor}`}
                >
                  {portal.badge}
                </span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {portal.description}
              </p>
            </div>

            <div className="flex items-center text-xs font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors pt-4 border-t border-zinc-800/50">
              Truy cập phân hệ
              <svg
                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </a>
        ))}
      </section>

      {/* Footer & Liên hệ */}
      <footer className="max-w-5xl mx-auto w-full pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
        <div>
          <p className="font-bold text-emerald-400">THỰC PHẨM SẠCH CƯỜNG HUỆ</p>
          <p className="text-zinc-400">📍 Địa chỉ: 523 Nguyễn Trãi - Hạc Thành - Thanh Hóa</p>
          <p className="text-zinc-400">📞 Hotline: 0832 865 060 - 0829 261 982</p>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://zalo.me/g/fkjggh648"
            target="_blank"
            rel="noreferrer"
            className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg font-semibold transition-colors"
          >
            Nhóm Zalo Đồ Ăn Chín ↗
          </a>
        </div>
      </footer>
    </main>
  );
}