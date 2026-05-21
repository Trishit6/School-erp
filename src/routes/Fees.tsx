import { FiPlus } from "react-icons/fi"

const invoices = [
  {
    id: "INV-9001",
    student: "Aisha Khan",
    amount: "$1,200",
    due: "2026-05-15",
    status: "Paid",
  },
  {
    id: "INV-9002",
    student: "Liam Carter",
    amount: "$1,200",
    due: "2026-05-15",
    status: "Pending",
  },
  {
    id: "INV-9003",
    student: "Mei Tanaka",
    amount: "$1,450",
    due: "2026-05-20",
    status: "Paid",
  },
  {
    id: "INV-9004",
    student: "Diego Alvarez",
    amount: "$1,200",
    due: "2026-04-30",
    status: "Overdue",
  },
  {
    id: "INV-9005",
    student: "Noah Becker",
    amount: "$1,450",
    due: "2026-05-25",
    status: "Pending",
  },
  {
    id: "INV-9006",
    student: "Zara Ahmed",
    amount: "$1,200",
    due: "2026-05-15",
    status: "Paid",
  },
]

export default function FeesPage() {
  return (
    <div className="flex-1 bg-[#f6f7f9] min-h-screen">

      {/* HEADER */}
      <div className="border-b border-slate-200 bg-white px-6 py-6 flex items-start justify-between">

        <div>
          <div className="inline-flex items-center rounded-full bg-[#d9f4f8] px-3 py-[2px] text-[10px] font-semibold tracking-wide text-[#0b8ca1]">
            OPERATIONS
          </div>

          <h1 className="mt-3 text-[34px] leading-none font-bold text-[#0f172a]">
            Fees & Invoices
          </h1>

          <p className="mt-3 text-[14px] text-slate-500">
            Track tuition payments and outstanding dues.
          </p>
        </div>

        <button className="mt-3 flex h-[42px] items-center gap-2 rounded-[14px] bg-[#007c91] px-5 text-[14px] font-semibold text-white shadow-sm hover:bg-[#006d80]">
          <FiPlus size={15} />
          New invoice
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-5">

        {/* STATS */}
        <div className="grid grid-cols-4 gap-4">

          <div className="rounded-[20px] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-[14px] text-slate-500">
              Billed
            </p>

            <h2 className="mt-3 text-[28px] font-bold text-[#007c91] leading-none">
              $7,700
            </h2>
          </div>

          <div className="rounded-[20px] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-[14px] text-slate-500">
              Collected
            </p>

            <h2 className="mt-3 text-[28px] font-bold text-[#4fbf7b] leading-none">
              $3,850
            </h2>
          </div>

          <div className="rounded-[20px] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-[14px] text-slate-500">
              Pending
            </p>

            <h2 className="mt-3 text-[28px] font-bold text-[#f5b041] leading-none">
              $2,650
            </h2>
          </div>

          <div className="rounded-[20px] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-[14px] text-slate-500">
              Overdue
            </p>

            <h2 className="mt-3 text-[28px] font-bold text-[#ef4444] leading-none">
              $1,200
            </h2>
          </div>
        </div>

        {/* TABLE */}
        <div className="mt-5 overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-sm">

          {/* TABLE HEADER */}
          <div className="grid grid-cols-6 border-b border-slate-200 px-5 py-4 text-[14px] font-semibold text-slate-500">
            <p>Invoice</p>
            <p>Student</p>
            <p>Amount</p>
            <p>Due</p>
            <p>Status</p>
            <p className="text-right">Action</p>
          </div>

          {/* ROWS */}
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="grid grid-cols-6 items-center border-b border-slate-100 px-5 py-5 last:border-b-0"
            >
              <p className="font-mono text-[13px] text-slate-700">
                {invoice.id}
              </p>

              <p className="text-[15px] font-semibold text-slate-800">
                {invoice.student}
              </p>

              <p className="text-[15px] text-slate-700">
                {invoice.amount}
              </p>

              <p className="text-[14px] text-slate-500">
                {invoice.due}
              </p>

              <div>
                <span
                  className={`rounded-full px-3 py-1 text-[12px] font-semibold ${
                    invoice.status === "Paid"
                      ? "bg-green-100 text-green-600"
                      : invoice.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-500"
                  }`}
                >
                  {invoice.status}
                </span>
              </div>

              <button className="text-right text-[13px] font-semibold text-slate-800 hover:text-[#0b8ca1]">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}