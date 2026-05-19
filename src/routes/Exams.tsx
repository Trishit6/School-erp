export default function Exams() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
            ACADEMICS
          </span>

          <h1 className="mt-3 text-5xl font-bold">
            Exams
          </h1>

          <p className="mt-2 text-slate-500">
            Upcoming assessments.
          </p>
        </div>

        <button className="rounded-2xl bg-cyan-700 px-6 py-3 font-semibold text-white">
          + Schedule exam
        </button>
      </div>
    </div>
  )
}