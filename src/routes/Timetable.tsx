export default function Timetable() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
            ACADEMICS
          </span>

          <h1 className="mt-3 text-5xl font-bold">
            Timetable
          </h1>

          <p className="mt-2 text-slate-500">
            Grade 10 — A · Spring Term 2026
          </p>
        </div>

        <div className="flex gap-4">
          <button className="rounded-2xl border bg-white px-5 py-3 font-semibold">
            Print
          </button>

          <button className="rounded-2xl bg-cyan-700 px-5 py-3 font-semibold text-white">
            Edit schedule
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8">
        <div className="grid grid-cols-6 gap-4">
          {["Math", "Physics", "English", "History", "Biology", "PE"].map(
            (subject) => (
              <div
                key={subject}
                className="rounded-3xl border bg-cyan-50 p-6"
              >
                <h3 className="text-xl font-bold text-cyan-700">
                  {subject}
                </h3>

                <p className="mt-2 text-slate-500">
                  Room 204
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}