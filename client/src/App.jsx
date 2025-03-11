import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import RootLayout from "./pages/layout"
import DashboardLayout from "./pages/dashboard/layout"
import Tracker from "./pages/dashboard/tracker/index"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route element={<DashboardLayout />}>
            <Route index element={<Navigate to="/tracker" />} />
            <Route path="/tracker" element={<Tracker />} />
          </Route>
          <Route path="login" element={<h1>Login page</h1>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
