import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { router } from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
