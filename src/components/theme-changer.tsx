import { useTheme } from 'next-themes'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <button onClick={() => setTheme(theme==='dark'?'light':'dark')}>
        {theme==='dark'?'Light Mode':' Mode'}
        </button>
    </div>
  )
}

export default ThemeChanger