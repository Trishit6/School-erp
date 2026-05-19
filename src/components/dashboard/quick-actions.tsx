export default function QuickActions() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900 mb-4">
        Quick Actions
      </h2>

      <div className="space-y-3">
        <button className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-left hover:bg-slate-50">
          Enroll new student
        </button>

        <button className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-left hover:bg-slate-50">
          Mark attendance
        </button>

        <button className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-left hover:bg-slate-50">
          Schedule exam
        </button>

        <button className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-left hover:bg-slate-50">
          Generate invoice
        </button>
      </div>
    </div>
  )
}