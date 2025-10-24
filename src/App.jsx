import { BrowserRouter } from 'react-router-dom'
import { Layout } from './loyouts/Layout'
import { AppRoutes } from './routes/AppRoutes'


export const App = () => {

  return (

    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
    
    

  )
}
