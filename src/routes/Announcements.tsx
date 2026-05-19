const announcements = [
  {
    title: "Annual Sports Day on June 8",
    tag: "Event",
    desc: "All students gather at the main field by 8:00 AM.",
  },
  {
    title: "Midterm schedule published",
    tag: "Academics",
    desc: "Exam schedules are now available.",
  },
]

export default function Announcements() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
            OPERATIONS
          </span>

          <h1 className="mt-3 text-5xl font-bold">
            Announcements
          </h1>

          <p className="mt-2 text-slate-500">
            Broadcast updates to students and staff.
          </p>
        </div>

        <button className="rounded-2xl bg-cyan-700 px-6 py-3 font-semibold text-white">
          + New announcement
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {announcements.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-8"
          >
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <span className="rounded-full border px-3 py-1 text-sm">
                {item.tag}
              </span>
            </div>

            <p className="mt-4 text-lg text-slate-500">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}