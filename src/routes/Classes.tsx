const classes = [
  {
    code: "C-10A",
    name: "Grade 10 — A",
    teacher: "Dr. Helen Park",
    room: "204",
    students: "32",
    subjects: "8",
  },
  {
    code: "C-10B",
    name: "Grade 10 — B",
    teacher: "Ms. Farah Idris",
    room: "206",
    students: "30",
    subjects: "8",
  },
]

export default function Classes() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
            PEOPLE
          </span>

          <h1 className="mt-3 text-5xl font-bold text-slate-900">
            Classes
          </h1>

          <p className="mt-2 text-slate-500">
            42 active classes across all grades.
          </p>
        </div>

        <button className="rounded-2xl bg-cyan-700 px-6 py-3 font-semibold text-white">
          + New class
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {classes.map((item) => (
          <div
            key={item.code}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-semibold text-slate-400">
              {item.code}
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              {item.name}
            </h2>

            <p className="mt-2 text-slate-500">
              Lead: {item.teacher}
            </p>

            <div className="mt-6 border-t pt-5">
              <div className="grid grid-cols-3 text-center">
                <div>
                  <p className="text-sm text-slate-400">Room</p>
                  <h4 className="mt-2 text-xl font-bold">
                    {item.room}
                  </h4>
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Students
                  </p>

                  <h4 className="mt-2 text-xl font-bold">
                    {item.students}
                  </h4>
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Subjects
                  </p>

                  <h4 className="mt-2 text-xl font-bold">
                    {item.subjects}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}