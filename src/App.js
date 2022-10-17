import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'


function App() {
  return (
    <div className={["App"]}>
     <Outlet/>       
    </div>
  );
}

export default App;
