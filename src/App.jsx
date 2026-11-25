import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Projects from "./pages/projects";
import Tasks from "./pages/tasks";
import Login from "./pages/login";

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/tasks" element={<Tasks/>}/>
      </Routes>
    </BrowserRouter>
   
   );
}
export default App
;