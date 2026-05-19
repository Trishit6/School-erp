const teachers = [
  {
    name: "Dr. Helen Park",
    subject: "Mathematics",
    classes: "5 classes",
    year: "Since 2017",
    email: "h.park@school.edu",
  },
  {
    name: "Mr. Samuel Doyle",
    subject: "Physics",
    classes: "4 classes",
    year: "Since 2015",
    email: "s.doyle@school.edu",
  },
  {
    name: "Ms. Farah Idris",
    subject: "English Literature",
    classes: "6 classes",
    year: "Since 2019",
    email: "f.idris@school.edu",
  },
]

export default function Teachers() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
            PEOPLE
          </span>

          <h1 className="mt-3 text-5xl font-bold text-slate-900">
            Teachers
          </h1>

          <p className="mt-2 text-slate-500">
            Faculty directory and class assignments.
          </p>
        </div>

        <button className="rounded-2xl bg-cyan-700 px-6 py-3 font-semibold text-white">
          + Add teacher
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <div
            key={teacher.email}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="h-28 bg-gradient-to-r from-cyan-700 to-orange-300" />

            <div className="p-6">
              <div className="-mt-16 mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-3xl font-bold text-cyan-700 shadow">
                {teacher.name.charAt(0)}
              </div>

              <h2 className="text-3xl font-bold text-slate-900">
                {teacher.name}
              </h2>

              <p className="mt-2 text-lg text-slate-500">
                {teacher.subject}
              </p>

              <div className="mt-5 flex gap-3">
                <span className="rounded-full border px-4 py-1 text-sm">
                  {teacher.classes}
                </span>

                <span className="rounded-full border px-4 py-1 text-sm">
                  {teacher.year}
                </span>
              </div>

              <div className="mt-6 border-t pt-5 text-slate-500">
                {teacher.email}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}