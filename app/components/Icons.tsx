import { FaLightbulb, FaMoon } from 'react-icons/fa'

function LightBulbIcon({ size = 10 }) {
  return <FaLightbulb size={size} />
}

function MoonIcon({ size = 10 }) {
  return <FaMoon size={size} />
}

export { LightBulbIcon, MoonIcon }
