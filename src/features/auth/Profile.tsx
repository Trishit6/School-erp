import { useNavigate } from "react-router-dom"

export default function Profile() {

  const navigate = useNavigate()

  const user = localStorage.getItem("school_user")

  const parsedUser = user
    ? JSON.parse(user)
    : null

  const handleLogout = () => {
    localStorage.removeItem("school_user")
    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-[#f5f7fa] p-6">

      <div className="max-w-md mx-auto bg-white rounded-3xl p-8 shadow-sm border border-slate-200">

        <div className="flex flex-col items-center">

          <div className="h-24 w-24 rounded-full bg-[#0b8ca1] text-white flex items-center justify-center text-3xl font-bold">
            A
          </div>

          <h2 className="mt-4 text-2xl font-bold text-slate-900">
            Admin Profile
          </h2>

          <p className="text-slate-500 mt-1">
            School ERP Administrator
          </p>
        </div>

        <div className="mt-8 space-y-4">

          <div>
            <p className="text-sm text-slate-400">
              Email
            </p>

            <h3 className="font-semibold text-slate-800">
              {parsedUser?.email || "admin@gmail.com"}
            </h3>
          </div>

          <div>
            <p className="text-sm text-slate-400">
              Role
            </p>

            <h3 className="font-semibold text-slate-800">
              Principal
            </h3>
          </div>

        </div>

        <button
          onClick={handleLogout}
          className="w-full mt-8 bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl font-semibold transition"
        >
          Logout
        </button>

      </div>
    </div>
  )
}