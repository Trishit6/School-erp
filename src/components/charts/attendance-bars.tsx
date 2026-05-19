import { classAttendance } from "../../data/dashboard-data"

export default function AttendanceBars() {
  return (
    <div className="chart-card">
      <h3>Today's attendance by class</h3>

      <p className="small-text">
        Live count from this morning's roll call
      </p>

      <div className="bars">
        {classAttendance.map((item) => (
          <div className="bar-item" key={item.name}>
            <div className="bar-label">
              <span>{item.name}</span>

              <span>{item.value}%</span>
            </div>

            <div className="bar-bg">
              <div
                className="bar-fill"
                style={{
                  width: `${item.value}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}