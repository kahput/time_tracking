import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
