import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./components/Login/Login"
import Register from "./components/Registar/Register"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element ={<Register/>} />

        <Route path="login" element={<Login/>}  />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
