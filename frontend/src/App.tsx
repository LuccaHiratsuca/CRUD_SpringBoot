import Login from './pages/Login'
import Products from './pages/Products'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  
  const queryClient = new QueryClient()

  return (
    
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Products />
      </QueryClientProvider>
    </Provider>
  )
}

export default App