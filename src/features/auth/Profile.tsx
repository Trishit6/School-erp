import { Mail, ShieldCheck } from "lucide-react"

export default function Profile() {
  const admin = JSON.parse(localStorage.getItem("admin") || "{}")

  return (
    <div className="p-8">
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 max-w-2xl">
        <div className="flex items-center gap-5">
          <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-3xl font-bold">
            RA
          </div>

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              {admin.name}
            </h1>

            <p className="text-slate-500 mt-1">
              {admin.role}
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-3 text-slate-700">
            <Mail size={20} />
            {admin.email}
          </div>

          <div className="flex items-center gap-3 text-slate-700">
            <ShieldCheck size={20} />
            Super Admin Access
          </div>
        </div>
      </div>
    </div>
  )
}