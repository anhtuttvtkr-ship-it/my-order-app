import React from 'react';

export default function Home() {
  const portals = [
    {
      title: 'Quản Lý Admin',
      description: 'Quản lý kho hàng thịt nhập khẩu, giá bán, báo cáo doanh thu và cấu hình hệ thống.',
      url: 'https://admin.cuonghuefoods.com',
      badge: 'Admin',
      badgeColor: 'bg-red-500/10 text-red-500 border-red-500/30',
      icon: '🛡️',
    },
    {
      title: 'Cổng Nhân Viên (POS)',
      description: 'Giao diện soạn hàng, cắt thái thịt theo yêu cầu và xử lý đơn tại quầy.',
      url: 'https://staff.cuonghuefoods.com',
      badge: 'Staff',
      badgeColor: 'bg-amber-500/10 text-amber-500 border-amber-500/30',
      icon: '🥩',
    },
    {
      title: 'Đặt Hàng Trực Tuyến',
      description: 'Kênh đặt thịt bò, combo lẩu nướng và gia vị giao tận nhà cho khách hàng.',
      url: 'https://link.cuonghuefoods.com',
      badge: 'Khách Hàng',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
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
    'Thịt Bố Úc / Mỹ',
    'Combo Lẩu Nướng',
    'Thịt Heo / Cừu',
    'Sốt & Gia Vị',
    'Hải Sản Nhập Khẩu',
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-between p-4 md:p-8 font-sans">
      {/* Header */}
      <header className="max-w-5xl mx-auto w-full flex flex-col items-center text-center space-y-4 pt-6 pb-4">
        <div className="flex items-center space-x-2 bg-red-950/80 border border-red-800/50 px-4 py-1.5 rounded-full">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-red-400">
            Cường Huệ Foods • Thực Phẩm Sạch & Thịt Nhập Khẩu
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
          Hệ Thống <span className="text-red-500">Đặt Hàng & Quản Lý</span>
        </h1>
        
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">
          Giải pháp quản lý phân phối thịt tươi sống, thực phẩm đông lạnh và hệ thống đặt món tự động dành cho chuỗi cửa hàng Cường Huệ Foods.
        </p>

        {/* Danh mục sản phẩm gợi ý */}
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {categories.map((cat, idx) => (
            <span
              key={idx}
              className="text-xs bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1 rounded-lg hover:border-red-500/50 transition-colors"
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
            className="group relative p-6 bg-zinc-900/80 border border-zinc-800/80 rounded-2xl transition-all duration-300 hover:border-red-500/60 hover:bg-zinc-900 hover:shadow-2xl hover:shadow-red-950/20 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl p-2 bg-zinc-950 rounded-xl border border-zinc-800">
                    {portal.icon}
                  </span>
                  <h2 className="text-xl font-bold text-zinc-100 group-hover:text-red-400 transition-colors">
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

            <div className="flex items-center text-xs font-bold text-red-400 group-hover:text-red-300 transition-colors pt-4 border-t border-zinc-800/50">
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
          <p className="font-medium text-zinc-400">CƯỜNG HUỆ FOODS - Chuyên Thực Phẩm Nhập Khẩu</p>
          <p>© {new Date().getFullYear()} Cuong Hue Foods. Tất cả quyền được bảo lưu.</p>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://cuonghuefoods.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-400 transition-colors"
          >
            Website Chính Thức ↗
          </a>
        </div>
      </footer>
    </main>
  );
}