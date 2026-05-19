import {
  FiUsers,
  FiBookOpen,
  FiHome,
  FiDollarSign,
  FiArrowUpRight,
} from "react-icons/fi"

const stats = [
  {
    title: "Students",
    value: "1,284",
    growth: "+24 this week",
    icon: <FiUsers size={18} />,
    bg: "bg-cyan-100",
    color: "text-cyan-700",
  },
  {
    title: "Teachers",
    value: "87",
    growth: "+3 this week",
    icon: <FiBookOpen size={18} />,
    bg: "bg-orange-100",
    color: "text-orange-700",
  },
  {
    title: "Classes",
    value: "42",
    growth: "+1 this week",
    icon: <FiHome size={18} />,
    bg: "bg-green-100",
    color: "text-green-700",
  },
  {
    title: "Fees collected",
    value: "₹184k",
    growth: "+12% this week",
    icon: <FiDollarSign size={18} />,
    bg: "bg-yellow-100",
    color: "text-yellow-700",
  },
]

const announcements = [
  {
    title: "Annual Sports Day on June 8",
    tag: "Event",
    desc: "All students gather at the main field by 8:00 AM. Houses will compete across 14 events.",
    meta: "Principal’s Office · 2026-05-06",
  },
  {
    title: "Midterm schedule published",
    tag: "Academics",
    desc: "The complete midterm exam schedule is now available under the Exams page. Please review your dates.",
    meta: "Academic Dept. · 2026-05-04",
  },
  {
    title: "Library closed Friday afternoon",
    tag: "Notice",
    desc: "Maintenance work — the library will reopen Saturday at 9:00 AM.",
    meta: "Library · 2026-05-03",
  },
]

const quickActions = [
  "Enroll a new student",
  "Mark attendance",
  "Schedule an exam",
  "Generate invoice",
]

export default function Dashboard() {
  return (
    <div className="space-y-4">

      {/* HEADER */}
      <div className="flex items-start justify-between">

        <div>
          <div className="inline-flex px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-[10px] font-semibold uppercase tracking-wide mb-3">
            Overview
          </div>

          <h1 className="text-[28px] font-bold text-slate-900 leading-none">
            Good morning, Principal
          </h1>

          <p className="text-[13px] text-slate-500 mt-3">
            Here's how the school is doing today — Thursday, May 7.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="h-[40px] px-5 rounded-xl border border-slate-300 text-[13px] font-medium bg-white">
            Export report
          </button>

          <button className="h-[40px] px-5 rounded-xl bg-[#0b8ca1] text-white text-[13px] font-medium">
            New announcement
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-2xl p-5"
          >
            <div className="flex items-start justify-between">

              <div>
                <p className="text-[13px] text-slate-500">
                  {item.title}
                </p>

                <h2 className="text-[24px] font-bold text-slate-900 mt-2">
                  {item.value}
                </h2>

                <p className="text-[12px] text-emerald-500 mt-2">
                  ↗ {item.growth}
                </p>
              </div>

              <div
                className={`h-12 w-12 rounded-2xl flex items-center justify-center ${item.bg} ${item.color}`}
              >
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-[2fr_1fr] gap-4">

        {/* ATTENDANCE TREND */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5">

          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-[15px] font-semibold text-slate-800">
                Attendance trend
              </h3>

              <p className="text-[12px] text-slate-500">
                School-wide attendance rate over the last 8 weeks
              </p>
            </div>

            <div className="px-3 py-1 rounded-full bg-slate-100 text-[11px] text-slate-600">
              ⏺ 94.2% avg
            </div>
          </div>

          <div className="h-[230px] relative overflow-hidden">

            {/* GRID */}
            <div className="absolute inset-0 grid grid-cols-8">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="border-r border-dashed border-slate-200"
                />
              ))}
            </div>

            <div className="absolute inset-0 grid grid-rows-5">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="border-b border-dashed border-slate-200"
                />
              ))}
            </div>

            {/* FAKE SVG CHART */}
            <svg
              viewBox="0 0 800 240"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                d="
                M0,120
                C80,100 120,90 180,115
                C240,140 280,70 350,95
                C420,120 470,60 540,75
                C610,90 660,70 800,40
                "
                fill="none"
                stroke="#0b8ca1"
                strokeWidth="3"
              />

              <path
                d="
                M0,120
                C80,100 120,90 180,115
                C240,140 280,70 350,95
                C420,120 470,60 540,75
                C610,90 660,70 800,40
                L800,240
                L0,240
                Z
                "
                fill="rgba(11,140,161,0.12)"
              />
            </svg>

            {/* WEEK LABELS */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[11px] text-slate-400 px-1">
              <span>W1</span>
              <span>W2</span>
              <span>W3</span>
              <span>W4</span>
              <span>W5</span>
              <span>W6</span>
              <span>W7</span>
              <span>W8</span>
            </div>
          </div>
        </div>

        {/* BAR CHART */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5">

          <h3 className="text-[15px] font-semibold text-slate-800">
            Today’s attendance by class
          </h3>

          <p className="text-[12px] text-slate-500 mb-5">
            Live count from this morning’s roll call
          </p>

          <div className="h-[240px] flex items-end justify-between gap-3">

            {[90, 86, 84, 83, 80, 74].map((height, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 flex-1"
              >
                <div className="w-full rounded-t-md bg-emerald-500 relative">
                  <div
                    style={{ height: `${height * 1.7}px` }}
                    className="w-full rounded-t-md bg-emerald-500 relative"
                  >
                    <div className="absolute top-0 left-0 right-0 h-2 bg-red-400 rounded-t-md" />
                  </div>
                </div>

                <span className="text-[10px] text-slate-500">
                  Grade {i + 7}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="grid grid-cols-[2fr_1fr] gap-4">

        {/* ANNOUNCEMENTS */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5">

          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-[15px] font-semibold">
                Recent announcements
              </h3>

              <p className="text-[12px] text-slate-500">
                Stay on top of what's happening across campus
              </p>
            </div>

            <button className="flex items-center gap-1 text-[12px] font-medium">
              View all
              <FiArrowUpRight />
            </button>
          </div>

          <div>
            {announcements.map((item, index) => (
              <div
                key={index}
                className={`py-4 ${
                  index !== announcements.length - 1
                    ? "border-b border-slate-200"
                    : ""
                }`}
              >
                <div className="flex items-start gap-3">

                  <div className="h-9 w-9 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 text-sm">
                    📢
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-[14px] font-semibold text-slate-800">
                        {item.title}
                      </h4>

                      <span className="px-2 py-[2px] rounded-full border border-slate-200 text-[10px] text-slate-500">
                        {item.tag}
                      </span>
                    </div>

                    <p className="text-[12px] text-slate-500 mt-2 leading-relaxed">
                      {item.desc}
                    </p>

                    <p className="text-[11px] text-slate-400 mt-2">
                      {item.meta}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5">

          <h3 className="text-[15px] font-semibold">
            Quick actions
          </h3>

          <p className="text-[12px] text-slate-500 mb-5">
            Common tasks for today
          </p>

          <div className="space-y-3">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="w-full h-[42px] rounded-xl border border-slate-200 bg-[#fafafa] text-left px-4 text-[13px] font-medium hover:bg-slate-100 transition"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}