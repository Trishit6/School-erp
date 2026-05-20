import LoginForm from "./components/login-form"

export default function Login() {
  return (
    <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center px-4">
      <div className="w-full max-w-[420px] bg-white rounded-[32px] border border-slate-200 shadow-sm p-8">
        
        <div className="flex justify-center">
          <div className="h-14 w-14 rounded-full bg-[#0b8ca1] flex items-center justify-center text-white text-xl">
            🎓
          </div>
        </div>

        <div className="text-center mt-5">
          <h1 className="text-[38px] font-bold text-slate-900">
            Welcome Back
          </h1>

          <p className="mt-3 text-slate-400 text-[15px]">
            Login to continue
          </p>
        </div>

        <div className="mt-8">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}