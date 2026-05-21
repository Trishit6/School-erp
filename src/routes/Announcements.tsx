import {
  FiPlus,
  FiSearch,
  FiBell,
} from "react-icons/fi"

const announcements = [
  {
    title: "Annual Sports Day on June 8",
    department: "Principal's Office",
    date: "2026-05-06",
    tag: "Event",
    message:
      "All students gather at the main field by 8:00 AM. Houses will compete across 14 events.",
  },
  {
    title: "Midterm schedule published",
    department: "Academic Dept.",
    date: "2026-05-04",
    tag: "Academics",
    message:
      "The complete midterm exam schedule is now available under the Exams page. Please review your dates.",
  },
  {
    title: "Library closed Friday afternoon",
    department: "Library",
    date: "2026-05-03",
    tag: "Notice",
    message:
      "Maintenance work — the library will reopen Saturday at 9:00 AM.",
  },
  {
    title: "Parent-teacher meeting",
    department: "Admin",
    date: "2026-05-02",
    tag: "Event",
    message:
      "Scheduled for May 22. Booking opens next Monday via the parent portal.",
  },
]

export default function Announcements() {
  return (
    <div className="flex-1 min-h-screen bg-[#f6f8fb]">

      {/* TOPBAR */}
      <div className="h-[56px] bg-white border-b border-[#e5e7eb] flex items-center justify-between px-6">

        <div className="flex items-center gap-4">

          <div className="text-[15px] text-slate-700">
            ☰
          </div>

          <div className="relative">

            <FiSearch
              size={14}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search students, classes, invoices..."
              className="w-[460px] h-[38px] rounded-[14px] border border-[#dbe2ea] bg-white pl-11 pr-4 text-[13px] outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">

          <FiBell
            size={15}
            className="text-slate-600"
          />

          <div className="text-right">
            <h4 className="text-[13px] font-semibold text-slate-800">
              Spring Term 2026
            </h4>

            <p className="text-[11px] text-slate-400">
              Week 7 · Day 4
            </p>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <div className="px-7 py-8 border-b border-[#e5e7eb]">

        <div className="flex items-start justify-between">

          <div>

            <span className="px-3 py-[4px] rounded-full bg-[#dff4f7] text-[#0b8ca1] text-[11px] font-semibold uppercase">
              Operations
            </span>

            <h1 className="mt-3 text-[38px] font-bold text-[#0f172a] leading-none">
              Announcements
            </h1>

            <p className="mt-3 text-[15px] text-slate-500">
              Broadcast updates to students, parents and staff.
            </p>
          </div>

          <button className="h-[40px] px-5 rounded-[13px] bg-[#007f95] hover:bg-[#006f83] text-white text-[14px] font-semibold flex items-center gap-2 shadow-sm">

            <FiPlus size={15} />

            New announcement
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">

        <div className="grid grid-cols-2 gap-4">

          {announcements.map((item, index) => (

            <div
              key={index}
              className="bg-white border border-[#dfe7ee] rounded-[22px] p-5 shadow-[0_2px_10px_rgba(15,23,42,0.03)]"
            >

              <div className="flex items-start gap-4">

                {/* ICON BOX */}
                <div className="h-11 w-11 rounded-full bg-[#d9f2f7] flex items-center justify-center text-[#0b8ca1] text-[18px] font-bold shrink-0">
                  📢
                </div>

                <div className="flex-1">

                  <div className="flex items-center gap-2 flex-wrap">

                    <h2 className="text-[16px] font-bold text-[#172033]">
                      {item.title}
                    </h2>

                    <span className="px-3 py-[2px] rounded-full border border-[#d9e1e8] bg-[#f8fafc] text-[11px] text-slate-700">
                      {item.tag}
                    </span>
                  </div>

                  <div className="mt-1 flex items-center gap-2 text-[12px] text-slate-400">

                    <span>{item.department}</span>

                    <span>·</span>

                    <span>{item.date}</span>
                  </div>

                  <p className="mt-4 text-[14px] leading-7 text-slate-500">
                    {item.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}