import {
  FiPlus,
  FiBookOpen,
  FiUsers,
} from "react-icons/fi"

const classes = [
  {
    code: "C-10A",
    name: "Grade 10 — A",
    lead: "Dr. Helen Park",
    room: "204",
    students: "32",
    subjects: "8",
  },
  {
    code: "C-10B",
    name: "Grade 10 — B",
    lead: "Ms. Farah Idris",
    room: "206",
    students: "30",
    subjects: "8",
  },
  {
    code: "C-09A",
    name: "Grade 9 — A",
    lead: "Mr. Samuel Doyle",
    room: "112",
    students: "28",
    subjects: "7",
  },
  {
    code: "C-09B",
    name: "Grade 9 — B",
    lead: "Ms. Camila Rosa",
    room: "114",
    students: "29",
    subjects: "7",
  },
  {
    code: "C-11A",
    name: "Grade 11 — A",
    lead: "Mr. Adam Levi",
    room: "301",
    students: "26",
    subjects: "8",
  },
  {
    code: "C-12A",
    name: "Grade 12 — A",
    lead: "Mr. Kenji Sato",
    room: "305",
    students: "24",
    subjects: "8",
  },
]

export default function Classes() {
  return (
    <div className="min-h-screen bg-[#f6f8fb]">

      {/* HEADER */}
      <div className="flex items-start justify-between px-6 py-7 border-b border-slate-200 bg-white">

        <div>
          <span className="px-3 py-1 rounded-full bg-[#dff4f7] text-[#0b8ca1] text-[10px] font-bold uppercase tracking-wide">
            People
          </span>

          <h1 className="mt-3 text-[34px] leading-none font-bold text-slate-900">
            Classes
          </h1>

          <p className="mt-3 text-[15px] text-slate-500">
            42 active classes across all grades.
          </p>
        </div>

        <button className="h-[46px] px-5 rounded-2xl bg-[#0b8ca1] text-white font-semibold text-[14px] flex items-center gap-2 hover:bg-[#09798b] transition">
          <FiPlus size={16} />
          New class
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-6 grid grid-cols-3 gap-5">

        {classes.map((item) => (
          <div
            key={item.code}
            className="
              bg-white
              border
              border-slate-200
              rounded-[24px]
              p-5
              shadow-sm
            "
          >

            {/* TOP */}
            <div className="flex items-start justify-between">

              <div>
                <p className="text-[14px] font-semibold text-slate-500 uppercase tracking-wide">
                  {item.code}
                </p>

                <h2 className="mt-2 text-[22px] font-bold text-slate-900">
                  {item.name}
                </h2>

                <p className="mt-1 text-[15px] text-slate-500">
                  Lead:{" "}

                  <span className="text-slate-700">
                    {item.lead}
                  </span>
                </p>
              </div>

              {/* ICON */}
              <div className="
                h-[44px]
                w-[44px]
                rounded-full
                bg-[#fdf1e4]
                flex
                items-center
                justify-center
                text-[#f0a24a]
              ">
                <FiBookOpen size={20} />
              </div>
            </div>

            {/* DIVIDER */}
            <div className="h-[1px] bg-slate-200 my-5" />

            {/* STATS */}
            <div className="grid grid-cols-3">

              {/* ROOM */}
              <div className="text-center">

                <div className="flex items-center justify-center gap-1 text-slate-500 text-[13px]">
                  <FiBookOpen size={13} />
                  Room
                </div>

                <p className="mt-1 text-[24px] font-bold text-slate-900">
                  {item.room}
                </p>
              </div>

              {/* STUDENTS */}
              <div className="text-center">

                <div className="flex items-center justify-center gap-1 text-slate-500 text-[13px]">
                  <FiUsers size={13} />
                  Students
                </div>

                <p className="mt-1 text-[24px] font-bold text-slate-900">
                  {item.students}
                </p>
              </div>

              {/* SUBJECTS */}
              <div className="text-center">

                <div className="flex items-center justify-center gap-1 text-slate-500 text-[13px]">
                  <FiBookOpen size={13} />
                  Subjects
                </div>

                <p className="mt-1 text-[24px] font-bold text-slate-900">
                  {item.subjects}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}