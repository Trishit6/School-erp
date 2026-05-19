export default function Announcements() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Recent announcements
        </h2>

        <button className="text-sm font-medium text-cyan-700">
          View all
        </button>
      </div>

      <div className="space-y-4">
        <div className="border border-slate-200 rounded-2xl p-4">
          <h3 className="font-semibold text-slate-900">
            Annual Sports Day on June 8
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            All students gather at the main field by 8:00 AM.
          </p>
        </div>

        <div className="border border-slate-200 rounded-2xl p-4">
          <h3 className="font-semibold text-slate-900">
            Midterm schedule published
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Exams page has been updated with new dates.
          </p>
        </div>
      </div>
    </div>
  )
}