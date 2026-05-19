export default function Students() {
  const students = [
    {
      name: "Aisha Khan",
      id: "S-1042",
      grade: "10-A",
      guardian: "Rehan Khan",
      attendance: "96%",
      gpa: "3.8",
      status: "Active",
    },
    {
      name: "Liam Carter",
      id: "S-1043",
      grade: "9-B",
      guardian: "Sara Carter",
      attendance: "88%",
      gpa: "3.4",
      status: "Active",
    },
    {
      name: "Mei Tanaka",
      id: "S-1044",
      grade: "11-A",
      guardian: "Hiro Tanaka",
      attendance: "99%",
      gpa: "3.9",
      status: "Active",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
            PEOPLE
          </span>

          <h1 className="mt-3 text-5xl font-bold text-slate-900">
            Students
          </h1>

          <p className="mt-2 text-slate-500">
            1,284 enrolled across 42 classes.
          </p>
        </div>

        <button className="rounded-2xl bg-cyan-700 px-6 py-3 font-semibold text-white shadow">
          + Enroll student
        </button>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
        <table className="w-full">
          <thead className="border-b border-slate-200 bg-slate-50 text-left">
            <tr>
              <th className="px-6 py-4">Student</th>
              <th>Grade</th>
              <th>Guardian</th>
              <th>Attendance</th>
              <th>GPA</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className="border-b border-slate-100"
              >
                <td className="px-6 py-5">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {student.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {student.id}
                    </p>
                  </div>
                </td>

                <td>{student.grade}</td>
                <td>{student.guardian}</td>
                <td>{student.attendance}</td>
                <td>{student.gpa}</td>

                <td>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}