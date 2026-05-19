import StatCard from "./stat-card"
import { stats } from "../../data/dashboard-data"

export default function StatsGrid() {
  return (
    <div className="stats-grid">
      {stats.map((item) => (
        <StatCard
          key={item.title}
          title={item.title}
          value={item.value}
          growth={item.growth}
        />
      ))}
    </div>
  )
}