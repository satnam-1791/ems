import { useContext, useState } from 'react';
import './App.css';
import Login from './components/Auth/login.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
import { AuthContext } from './components/provider/Authprovider.jsx';

function App() {

const [user,setUSer] = useState(null)

const handleLogin = (email,pasword) => {

console.log(email,pasword)
}

const data = useContext(AuthContext)
console.log(data)




  return (
 <>
{ !user ?<Login handleLogin={handleLogin}/>  :''}
{user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}

 </>
  )
}

export default App;
