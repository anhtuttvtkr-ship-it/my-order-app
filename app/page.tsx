import Link from 'next/link';

export default function Home() {
  const subdomains = [
    {
      title: 'Admin Portal',
      description: 'Quản lý hệ thống, đơn hàng và cấu hình chung.',
      url: 'https://admin.cuonghuefoods.com',
      badge: 'Admin',
      badgeColor: 'bg-red-500/10 text-red-500 border-red-500/20',
    },
    {
      title: 'Staff Portal',
      description: 'Giao diện dành cho nhân viên xử lý đơn và nhận món.',
      url: 'https://staff.cuonghuefoods.com',
      badge: 'Staff',
      badgeColor: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    },
    {
      title: 'Order Link',
      description: 'Đường dẫn đặt hàng trực tuyến cho khách hàng.',
      url: 'https://link.cuonghuefoods.com',
      badge: 'Customer',
      badgeColor: 'bg-green-500/10 text-green-500 border-green-500/20',
    },
    {
      title: 'Demo System',
      description: 'Môi trường xem thử và trải nghiệm tính năng mới.',
      url: 'https://demo.cuonghuefoods.com',
      badge: 'Demo',
      badgeColor: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
      {/* Header */}
      <div className="max-w-3xl text-center space-y-4 mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/40">
          Cường Huệ Foods
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Hệ Thống Quản Lý Đặt Hàng
        </h1>
        <p className="text-slate-400 text-base md:text-lg">
          Chọn cổng truy cập tương ứng với vai trò của bạn bên dưới
        </p>
      </div>

      {/* Grid điều hướng */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {subdomains.map((item) => (
          <a
            key={item.badge}
            href={item.url}
            className="group relative p-6 bg-slate-900/60 border border-slate-800 rounded-2xl transition-all duration-300 hover:border-slate-600 hover:bg-slate-900 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h2>
              <span
                className={`text-xs px-2.5 py-1 rounded-md border font-medium ${item.badgeColor}`}
              >
                {item.badge}
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              {item.description}
            </p>
            <div className="flex items-center text-xs font-semibold text-slate-300 group-hover:text-emerald-400 transition-colors">
              Truy cập ngay
              <svg
                className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Cường Huệ Foods. All rights reserved.
      </footer>
    </main>
  );
}