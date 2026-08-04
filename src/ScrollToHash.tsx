import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * react-router doesn't scroll to in-page anchors (e.g. `/#portfolio`) on
 * navigation the way a full page load does. This restores that behavior for
 * hash links so `<Link to="/#portfolio">` still jumps to the section.
 */
export function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const id = hash.slice(1)
    const target = document.getElementById(id)
    target?.scrollIntoView({ behavior: 'smooth' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash, pathname])

  return null
}
