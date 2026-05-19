import { Link, useNavigate } from "react-router-dom"
import { GraduationCap } from "lucide-react"

export default function Register() {
  const navigate = useNavigate()

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    navigate("/login")
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
              Create Admin
            </h1>

            <p className="text-slate-500">
              Register School ERP
            </p>
          </div>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-green-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-green-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-green-500"
          />

          <button className="w-full bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-xl font-semibold">
            Register
          </button>
        </form>

        <p className="text-center text-slate-500 mt-6">
          Already have account?
          <Link
            to="/login"
            className="text-green-600 font-semibold ml-2"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}