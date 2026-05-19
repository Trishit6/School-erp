import {
  FiUsers,
  FiBookOpen,
  FiHome,
  FiDollarSign,
} from "react-icons/fi"

const stats = [
  {
    title: "Students",
    value: "1,284",
    change: "+24 this week",
    icon: <FiUsers />,
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    title: "Teachers",
    value: "87",
    change: "+3 this week",
    icon: <FiBookOpen />,
    color: "bg-orange-100 text-orange-700",
  },
  {
    title: "Classes",
    value: "42",
    change: "+1 this week",
    icon: <FiHome />,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Fees collected",
    value: "₹184k",
    change: "+12% this week",
    icon: <FiDollarSign />,
    color: "bg-yellow-100 text-yellow-700",
  },
]

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-slate-500 text-sm">
                {item.title}
              </p>

              <h2 className="text-4xl font-bold text-slate-900 mt-3">
                {item.value}
              </h2>

              <p className="text-sm text-emerald-600 mt-2">
                {item.change}
              </p>
            </div>

            <div
              className={`h-12 w-12 rounded-2xl flex items-center justify-center text-xl ${item.color}`}
            >
              {item.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}