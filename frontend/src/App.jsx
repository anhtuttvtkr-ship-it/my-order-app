import React from 'react';

function App() {
  const bestSellers = [
    { name: 'Thịt Ba Chỉ Bò Mỹ (Cuộn Lẩu)', price: '185.000 đ', tag: 'BEST SELLER', img: '🥩' },
    { name: 'Set Lẩu Bò Cường Huệ', price: '399.000 đ', tag: 'BEST SELLER', img: '🍲' },
  ];

  const categories = ['Bán Chạy', 'Món Khai Vị', 'Set Lẩu / Nướng', 'Thực Phẩm Tươi', 'Đồ Uống'];

  const starters = [
    { name: 'Khoai Tây Chiên Bơ Tỏi', price: '45.000 đ', tag: 'Nổi bật' },
    { name: 'Salad Cá Hồi Xốt Chanh Leo', price: '89.000 đ', tag: 'Tươi ngon' },
  ];

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '80px', maxWidth: '480px', margin: '0 auto', boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}>
      {/* Top Banner */}
      <div style={{ backgroundColor: '#059669', color: '#ffffff', padding: '10px 16px', textAlign: 'center', fontSize: '12px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ backgroundColor: '#047857', padding: '2px 8px', borderRadius: '4px', fontSize: '10px' }}>QR ORDER</span>
        <span>Thực Phẩm Sạch Cường Huệ</span>
      </div>

      {/* Header Bàn */}
      <div style={{ padding: '16px', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#059669', backgroundColor: '#ecfdf5', padding: '4px 8px', borderRadius: '6px' }}>BÀN PHỤC VỤ</span>
          <h1 style={{ fontSize: '24px', fontWeight: '900', color: '#0f172a', margin: '4px 0 0 0' }}>Bàn 01</h1>
        </div>
        <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#059669', backgroundColor: '#ecfdf5', padding: '6px 12px', borderRadius: '20px', border: '1px solid #a7f3d0' }}>
          🟢 Đang phục vụ
        </span>
      </div>

      {/* Thông báo */}
      <div style={{ margin: '12px 16px', backgroundColor: '#fff7ed', border: '1px solid #fed7aa', color: '#9a3412', fontSize: '12px', padding: '10px 12px', borderRadius: '8px' }}>
        📢 <b>THÔNG BÁO:</b> Quý khách chọn món và bấm gửi đơn để bếp sơ chế & phục vụ nhé!
      </div>

      {/* Danh mục */}
      <div style={{ padding: '0 16px', display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
        {categories.map((cat, idx) => (
          <button
            key={idx}
            style={{
              whiteSpace: 'nowrap',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 'bold',
              border: idx === 0 ? 'none' : '1px solid #cbd5e1',
              backgroundColor: idx === 0 ? '#059669' : '#ffffff',
              color: idx === 0 ? '#ffffff' : '#475569',
              cursor: 'pointer'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Món bán chạy */}
      <section style={{ padding: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: 0 }}>Món Bán Chạy Nhất</h2>
          <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#059669' }}>Gợi ý hôm nay</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {bestSellers.map((item, idx) => (
            <div key={idx} style={{ backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ height: '110px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyCenter: 'center', fontSize: '40px', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '8px', left: '8px', backgroundColor: '#ef4444', color: '#ffffff', fontSize: '9px', fontWeight: '900', padding: '2px 6px', borderRadius: '4px' }}>
                  {item.tag}
                </span>
                <span style={{ margin: 'auto' }}>{item.img}</span>
              </div>
              <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                <h3 style={{ fontSize: '12px', fontWeight: 'bold', color: '#1e293b', margin: '0 0 8px 0' }}>{item.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', fontWeight: '900', color: '#059669' }}>{item.price}</span>
                  <button style={{ width: '28px', height: '28px', backgroundColor: '#059669', color: '#ffffff', border: 'none', borderRadius: '50%', fontWeight: 'bold', cursor: 'pointer' }}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Khai vị */}
      <section style={{ padding: '0 16px 16px 16px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', borderLeft: '4px solid #059669', paddingLeft: '8px', margin: '0 0 12px 0' }}>
          MÓN KHAI VỊ
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {starters.map((item, idx) => (
            <div key={idx} style={{ backgroundColor: '#ffffff', padding: '12px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
                🥗
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '9px', backgroundColor: '#ffedd5', color: '#ea580c', fontWeight: 'bold', padding: '2px 6px', borderRadius: '4px' }}>
                  {item.tag}
                </span>
                <h3 style={{ fontSize: '13px', fontWeight: 'bold', color: '#1e293b', margin: '4px 0 2px 0' }}>{item.name}</h3>
                <p style={{ fontSize: '12px', fontWeight: '900', color: '#059669', margin: 0 }}>{item.price}</p>
              </div>
              <button style={{ backgroundColor: '#059669', color: '#ffffff', border: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
                + Thêm
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Thanh giỏ hàng cố định bên dưới */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: '12px', backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', zIndex: 50 }}>
        <div style={{ maxWidth: '456px', margin: '0 auto' }}>
          <button style={{ width: '100%', backgroundColor: '#059669', color: '#ffffff', border: 'none', padding: '12px 16px', borderRadius: '12px', fontWeight: 'bold', fontSize: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(5, 150, 105, 0.3)' }}>
            <span>🛒 0 món đã chọn</span>
            <span>Xem đơn & Gửi Bếp ➔</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;