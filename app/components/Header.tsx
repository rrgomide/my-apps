import { Link } from '@remix-run/react'
import { LightBulbIcon, MoonIcon } from './Icons'

type HeaderProps = {
  theme: string
  onToggleTheme: (() => void) | null
}

function Header({ theme = 'light', onToggleTheme = null }: HeaderProps) {
  function handleToggleThemeClick() {
    if (onToggleTheme) {
      onToggleTheme()
    }
  }

  return (
    <header className="text-center bg-base-300 p-4 flex flex-row items-center justify-between">
      <Link to="/">Apps</Link>

      <button onClick={handleToggleThemeClick}>
        {theme === 'light' ? <MoonIcon /> : <LightBulbIcon />}
      </button>
    </header>
  )
}

export { Header }
