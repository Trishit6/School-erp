import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div className="min-h-screen bg-[#f6f7f9] flex items-center justify-center">

      <div className="w-[420px] bg-white rounded-3xl border border-slate-200 p-8">

        <div className="text-center mb-8">
          <div className="h-14 w-14 rounded-full bg-[#0b8ca1] mx-auto flex items-center justify-center text-white text-2xl mb-4">
            🎓
          </div>

          <h1 className="text-2xl font-bold">
            Create Account
          </h1>

          <p className="text-slate-500 text-sm mt-2">
            Register new admin account
          </p>
        </div>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full h-12 rounded-xl border border-slate-200 px-4 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full h-12 rounded-xl border border-slate-200 px-4 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full h-12 rounded-xl border border-slate-200 px-4 outline-none"
          />

          <button className="w-full h-12 rounded-xl bg-[#0b8ca1] text-white font-medium">
            Register
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-5">
          Already have account?{" "}

          <Link
            to="/login"
            className="text-[#0b8ca1] font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}