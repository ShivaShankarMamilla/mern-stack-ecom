import './App.css';
import { Routes,Route } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Category from "./components/Category";
import Dashboard from './pages/user/Dashboard';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminDashboard from './pages/Admin/AdminDashboard';
import PageNotFound from './pages/NotFound';
function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="admin" element={<AdminDashboard/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
