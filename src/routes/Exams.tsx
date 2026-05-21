import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiPlus,
} from "react-icons/fi"

const exams = [
  {
    grade: "10-A",
    title: "Midterm — Mathematics",
    month: "MAY",
    date: "12",
    day: "Tue",
    duration: "2h",
    room: "204",
  },
  {
    grade: "11-A",
    title: "Midterm — Physics",
    month: "MAY",
    date: "14",
    day: "Thu",
    duration: "2h",
    room: "301",
  },
  {
    grade: "10-B",
    title: "Quiz — English Lit",
    month: "MAY",
    date: "9",
    day: "Sat",
    duration: "45m",
    room: "206",
  },
  {
    grade: "12-A",
    title: "Final — Biology",
    month: "JUN",
    date: "2",
    day: "Tue",
    duration: "3h",
    room: "Lab 1",
  },
  {
    grade: "9-B",
    title: "Midterm — History",
    month: "MAY",
    date: "18",
    day: "Mon",
    duration: "1h 30m",
    room: "114",
  },
]

export default function Exams() {
  return (
    <div className="bg-[#f6f8fb] min-h-screen">

      {/* TOP HEADER */}
      <div className="border-b border-slate-200 bg-white px-6 py-7">

        <div className="flex items-start justify-between">

          <div>
            <span className="px-3 py-1 rounded-full bg-cyan-100 text-[#0b8ca1] text-[10px] font-semibold tracking-wide">
              ACADEMICS
            </span>

            <h1 className="text-[38px] leading-none font-bold text-slate-900 mt-4">
              Exams
            </h1>

            <p className="text-[15px] text-slate-500 mt-4">
              Upcoming assessments — make sure students are prepared.
            </p>
          </div>

          <button className="h-11 px-5 rounded-2xl bg-[#0b8ca1] hover:bg-[#09798a] transition text-white font-semibold text-[15px] flex items-center gap-2 shadow-sm">
            <FiPlus size={18} />
            Schedule exam
          </button>
        </div>
      </div>

      {/* EXAM GRID */}
      <div className="p-6">

        <div className="grid grid-cols-3 gap-5">

          {exams.map((exam, index) => (

            <div
              key={index}
              className="bg-white border border-slate-200 rounded-[24px] p-5 shadow-sm hover:shadow-md transition"
            >

              {/* TOP */}
              <div className="flex items-start justify-between">

                <div>

                  <div className="inline-flex h-8 items-center rounded-full border border-slate-200 px-3 text-[13px] font-semibold text-slate-700">
                    {exam.grade}
                  </div>

                  <h2 className="mt-5 text-[19px] leading-tight font-bold text-slate-900">
                    {exam.title}
                  </h2>
                </div>

                {/* DATE */}
                <div className="h-[62px] w-[62px] rounded-[20px] bg-cyan-50 flex flex-col items-center justify-center border border-cyan-100">

                  <span className="text-[11px] font-bold tracking-[1px] text-[#0b8ca1]">
                    {exam.month}
                  </span>

                  <span className="text-[32px] leading-none font-bold text-[#0b8ca1] mt-1">
                    {exam.date}
                  </span>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="mt-5 border-t border-slate-200"></div>

              {/* FOOTER */}
              <div className="mt-5 flex items-center gap-10 text-slate-500 text-[14px]">

                <div className="flex items-center gap-2">
                  <FiCalendar size={14} />
                  {exam.day}
                </div>

                <div className="flex items-center gap-2">
                  <FiClock size={14} />
                  {exam.duration}
                </div>

                <div className="flex items-center gap-2">
                  <FiMapPin size={14} />
                  {exam.room}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}