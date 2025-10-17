import React, { useState } from "react";
import { Filter, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sidebar } from "@/components/Sidebar";

// ✅ Dummy Data for Transactions
const paymentsData = [
  { id: "A56we", name: "Kate Morrison", amount: "$4,456", method: "Card Payment", date: "23-09-2024", status: "Completed" },
  { id: "12ade", name: "Ali Baba", amount: "$4,456", method: "Card Payment", date: "23-09-2024", status: "Completed" },
  { id: "Swe34", name: "Talha Warriach", amount: "$4,456", method: "Card Payment", date: "23-09-2024", status: "Pending" },
  { id: "F32gt", name: "Kate Morrison", amount: "$4,456", method: "Card Payment", date: "23-09-2024", status: "Pending" },
  { id: "d43frr", name: "Taha Janjua", amount: "$4,456", method: "Card Payment", date: "23-09-2024", status: "Pending" },
  { id: "dre45", name: "Ali Baba", amount: "$4,456", method: "Card Payment", date: "23-09-2024", status: "Pending" },
  { id: "ght56", name: "Ali Baba", amount: "$4,456", method: "Card Payment", date: "23-09-2024", status: "Pending" },
  { id: "fgrt5", name: "Harry Brook", amount: "$4,456", method: "Card Payment", date: "23-09-2024", status: "Completed" },
  { id: "ghj54", name: "Witness Min", amount: "$4,456", method: "Card Payment", date: "23-09-2024", status: "Completed" },
];

// ✅ Derived Data Sets
const failedPaymentsData = paymentsData.map((p) => ({ ...p, status: "Failed" }));
const refundsData = paymentsData.map((p) => ({ ...p, status: "Refund Requested" }));

export default function Payments() {
  const [activeTab, setActiveTab] = useState("Transactions");
  const tabs = ["Transactions", "Payments Failed", "Refunds"];

  const currentData =
    activeTab === "Payments Failed"
      ? failedPaymentsData
      : activeTab === "Refunds"
      ? refundsData
      : paymentsData;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-6 flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Payments Overview</h1>
            <p className="text-gray-500 text-sm mt-1">
              Review all transactions, refunds, and failed payments in one place.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} /> Filter
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowUpDown size={16} /> Sort
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition ${
                activeTab === tab
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Payments Table */}
        <Card className="bg-white rounded-2xl border shadow-sm overflow-hidden">
          <CardContent className="p-0 overflow-x-auto">
            <table className="min-w-full text-sm text-left border-collapse">
              <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="p-4">
                    <input type="checkbox" />
                  </th>
                  <th className="p-4">Transaction ID</th>
                  <th className="p-4">Full Name</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Method</th>
                  <th className="p-4">Date</th>
                  {activeTab === "Refunds" ? (
                    <th className="p-4 text-center">Actions</th>
                  ) : (
                    <th className="p-4 text-center">Status</th>
                  )}
                </tr>
              </thead>

              <tbody className="divide-y">
                {currentData.map((payment) => (
                  <tr
                    key={payment.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4">
                      <input type="checkbox" />
                    </td>
                    <td className="p-4 font-medium text-gray-800">
                      {payment.id}
                    </td>
                    <td className="p-4">{payment.name}</td>
                    <td className="p-4">{payment.amount}</td>
                    <td className="p-4">{payment.method}</td>
                    <td className="p-4">{payment.date}</td>

                    {activeTab === "Refunds" ? (
                      <td className="p-4 text-center">
                        <div className="flex justify-center gap-2">
                          <Button
                            variant="outline"
                            className="text-red-600 border-red-300 hover:bg-red-50"
                          >
                            ✖ Reject
                          </Button>
                          <Button
                            variant="outline"
                            className="text-green-600 border-green-300 hover:bg-green-50"
                          >
                            ✔ Approve
                          </Button>
                        </div>
                      </td>
                    ) : (
                      <td className="p-4 text-center">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            payment.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : payment.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {payment.status}
                        </span>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center px-4 py-3 border-t bg-gray-50">
              <Button variant="outline" size="sm">
                ← Previous
              </Button>
              <div className="flex gap-1 text-sm">
                {[1, 2, 3, "...", 8, 9, 10].map((num, i) => (
                  <button
                    key={i}
                    className={`px-3 py-1 rounded transition ${
                      num === 1
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <Button variant="outline" size="sm">
                Next →
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
