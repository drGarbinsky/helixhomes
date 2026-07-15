import { spineNodes } from '../data/content'

export function Spine() {
  return (
    <div className="spine" aria-hidden="true">
      {spineNodes.map((node) => (
        <div className="node" key={node.id} style={{ top: `${node.top}%` }}>
          <span>{node.label}</span>
        </div>
      ))}
    </div>
  )
}
