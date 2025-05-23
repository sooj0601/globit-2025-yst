import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout.tsx'
import './App.css'
import FarmStatus from './pages/farm-status/FarmStatus.tsx'
import StockOverview from "./pages/stock-management/StockOverview.tsx";


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<FarmStatus />} />
          <Route path="/stock-management/stock-overview" element={<StockOverview />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
