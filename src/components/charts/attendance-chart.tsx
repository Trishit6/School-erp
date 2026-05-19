import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { attendanceData } from "../../data/dashboard-data"

export default function AttendanceChart() {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <h3>Attendance trend</h3>

          <p>
            School-wide attendance rate over the last 8 weeks
          </p>
        </div>

        <div className="badge">94.2% avg</div>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={attendanceData}>
          <defs>
            <linearGradient id="green" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="#16a34a"
                stopOpacity={0.3}
              />

              <stop
                offset="100%"
                stopColor="#16a34a"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <XAxis dataKey="week" />

          <YAxis domain={[80, 100]} />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#15803d"
            strokeWidth={4}
            fill="url(#green)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}