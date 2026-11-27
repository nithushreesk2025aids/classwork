import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Projects from "./pages/projects";
import Tasks from "./pages/tasks";
import Teams from "./pages/teams";
import Settings from "./pages/settings";
import Clients from "./pages/clients";
import Calendar from "./pages/calendar";
import Dashboard from "./pages/dashboard";
import Register from "./pages/register";
import Admin from './pages/admin/adminlayout';
import Admindashboard from "./pages/admin/dashboard";
import Adminsettings from "./pages/admin/settings";
import UserDetails from "./pages/admin/userdetails";
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Register />} />
      <Route path="/adminlayout" element={<Admin />}>
         <Route path="dashboard" element={<Admindashboard />}/>
         <Route path="settings" element={<Adminsettings/>}/>
         <Route path="userdetails" element={<UserDetails/>}/>
      </Route>
    </Routes>
  </BrowserRouter> 
  );
}

export default App;