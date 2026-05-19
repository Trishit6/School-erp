export default function Attendance() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
            ACADEMICS
          </span>

          <h1 className="mt-3 text-5xl font-bold">
            Attendance
          </h1>

          <p className="mt-2 text-slate-500">
            Thursday, May 7 · Period 2
          </p>
        </div>

        <button className="rounded-2xl bg-cyan-700 px-6 py-3 font-semibold text-white">
          Save roll call
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {[
          ["Overall today", "91%", "text-slate-900"],
          ["Present", "154", "text-emerald-500"],
          ["Late", "4", "text-amber-500"],
          ["Absent", "11", "text-red-500"],
        ].map(([title, value, color]) => (
          <div
            key={title}
            className="rounded-3xl border border-slate-200 bg-white p-6"
          >
            <p className="text-slate-500">{title}</p>

            <h2 className={`mt-3 text-5xl font-bold ${color}`}>
              {value}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}