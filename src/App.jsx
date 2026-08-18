import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import StudentList from './pages/StudentList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/students" element={<StudentList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App