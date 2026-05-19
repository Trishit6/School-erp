import { Link, useNavigate } from "react-router-dom"
import { GraduationCap } from "lucide-react"

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    localStorage.setItem(
      "admin",
      JSON.stringify({
        name: "Rana Admin",
        email: "admin@school.com",
        role: "Principal",
      })
    )

    navigate("/")
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-14 w-14 rounded-2xl bg-green-600 flex items-center justify-center text-white">
            <GraduationCap size={28} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              School ERP
            </h1>

            <p className="text-slate-500">
              Smart School Management
            </p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              placeholder="admin@school.com"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-green-500"
            />
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-xl font-semibold">
            Login
          </button>
        </form>

        <p className="text-center text-slate-500 mt-6">
          No account?
          <Link
            to="/register"
            className="text-green-600 font-semibold ml-2"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}