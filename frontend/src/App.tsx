import { Route, Routes } from 'react-router-dom'
import { ProductRoutes } from './routes/productRoutes'
import Login from './pages/Login/Login'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products/*" element={<ProductRoutes />} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App