import Home from "./pages/Home"
import { ThemeProvider } from "./providers/ThemeProvider"

function App() {

  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App
