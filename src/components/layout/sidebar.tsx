import {
  FiGrid,
  FiUsers,
  FiBookOpen,
  FiCalendar,
  FiClipboard,
  FiClock,
  FiFileText,
  FiBarChart2,
  FiDollarSign,
  FiBell,
} from "react-icons/fi"

import { NavLink, useNavigate } from "react-router-dom"

const navClass = ({ isActive }: any) =>
  `flex items-center gap-3 px-3 py-2 rounded-xl text-[14px] font-medium transition
   ${
     isActive
       ? "bg-[#dff4f7] text-[#0b8ca1]"
       : "text-slate-600 hover:bg-slate-100"
   }`

export default function Sidebar() {

  const navigate = useNavigate()

  const handleProfileClick = () => {

    const user = localStorage.getItem("school_user")

    if (user) {
      navigate("/profile")
    } else {
      navigate("/login")
    }
  }

  return (
    <aside className="w-[174px] bg-white border-r border-slate-200 flex flex-col justify-between">

      <div>

        {/* LOGO */}
        <div className="px-3 pt-5 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#0b8ca1] flex items-center justify-center text-white text-sm">
              🎓
            </div>

            <div>
              <h2 className="font-bold text-[15px] text-slate-900">
                Skoolix
              </h2>

              <p className="text-[11px] text-slate-400">
                School OS
              </p>
            </div>
          </div>
        </div>

        {/* MENU */}
        <div className="p-2 space-y-5">

          {/* OVERVIEW */}
          <div>
            <p className="px-2 mb-2 text-[10px] uppercase text-slate-400">
              Overview
            </p>

            <div className="space-y-1">
              <NavLink to="/" end className={navClass}>
                <FiGrid size={16} />
                Dashboard
              </NavLink>
            </div>
          </div>

          {/* PEOPLE */}
          <div>
            <p className="px-2 mb-2 text-[10px] uppercase text-slate-400">
              People
            </p>

            <div className="space-y-1">
              <NavLink to="/students" className={navClass}>
                <FiUsers size={16} />
                Students
              </NavLink>

              <NavLink to="/teachers" className={navClass}>
                <FiBookOpen size={16} />
                Teachers
              </NavLink>

              <NavLink to="/classes" className={navClass}>
                <FiClipboard size={16} />
                Classes
              </NavLink>
            </div>
          </div>

          {/* ACADEMICS */}
          <div>
            <p className="px-2 mb-2 text-[10px] uppercase text-slate-400">
              Academics
            </p>

            <div className="space-y-1">
              <NavLink to="/attendance" className={navClass}>
                <FiCalendar size={16} />
                Attendance
              </NavLink>

              <NavLink to="/timetable" className={navClass}>
                <FiClock size={16} />
                Timetable
              </NavLink>

              <NavLink to="/exams" className={navClass}>
                <FiFileText size={16} />
                Exams
              </NavLink>

              <NavLink to="/grades" className={navClass}>
                <FiBarChart2 size={16} />
                Grades
              </NavLink>
            </div>
          </div>

          {/* OPERATIONS */}
          <div>
            <p className="px-2 mb-2 text-[10px] uppercase text-slate-400">
              Operations
            </p>

            <div className="space-y-1">
              <NavLink to="/fees" className={navClass}>
                <FiDollarSign size={16} />
                Fees
              </NavLink>

              <NavLink to="/announcements" className={navClass}>
                <FiBell size={16} />
                Announcements
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* PROFILE CARD */}
      <div className="p-2">
        <button
          onClick={handleProfileClick}
          className="w-full border rounded-2xl p-2 flex items-center gap-2 hover:border-[#0b8ca1] transition"
        >

          <div className="h-8 w-8 rounded-full bg-orange-200 flex items-center justify-center text-[12px] font-bold">
            Admin
          </div>

          <div className="text-left">
            <h4 className="text-[12px] font-semibold">
               Admin
            </h4>

            <p className="text-[10px] text-slate-400">
              Principal
            </p>
          </div>
        </button>
      </div>
    </aside>
  )
}