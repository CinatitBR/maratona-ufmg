import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'

const App = () => {
  return <BrowserRouter>

    <Routes>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    
  </BrowserRouter>
}

export default App