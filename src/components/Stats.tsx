import { stats } from '../data/content'

export function Stats() {
  return (
    <section className="stats">
      {stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <div className="figure">{stat.figure}</div>
          <div className="label">{stat.label}</div>
        </div>
      ))}
    </section>
  )
}
