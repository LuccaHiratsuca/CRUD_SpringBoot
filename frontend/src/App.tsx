import Login from './pages/Login'
import Products from './pages/Products'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  
  const queryClient = new QueryClient()

  return (
    
      <QueryClientProvider client={queryClient}>
        <Products />
      </QueryClientProvider>
  )
}

export default App