import Link from "next/link";

export default function IdentityAuthWait() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B3A6A] text-white text-center p-4">
        <h1 className="text-xl font-bold mb-8">أقبل طلب المصادقة في هويتي</h1>
  
        <div className="bg-white rounded-full p-6 mb-6">
          <img src="/id-auth-icon.png" alt="هوية" className="w-24 h-24" />
        </div>
  
        <p className="text-sm mb-2">سهل بانتظار قبول المصادقة</p>
        <p className="text-sm mb-6">بعد القبول، يرجى الانتظار حتى يتم تحميل البيانات</p>
        <Link href={'/auth'}>
        <button className="bg-white text-[#0B3A6A] font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition">
          افتح التطبيق
        </button>
        </Link>
      </div>
    );
  }
  