import './App.scss'
import { Route, Routes } from 'react-router-dom';
import Create from './pages/create';
import Productlar from './pages/productlar';
import UpdateProd from './pages/update';
import { useMode } from './utils/zustand';
import DarkModeToggle from "react-dark-mode-toggle";


function App() {
  const { darkMode, toggleDarkMode } = useMode();

  return (
    <div className={`${darkMode ? "dark" : ""} `}>
      <div className="bigBox dark:bg-black dark:text-white duration-500">
        <div className="nav bg-white dark:bg-black duration-300 flex items-center justify-between">
          <img src="/user.jpg" alt="" />
          <DarkModeToggle className='toggle'
            onChange={toggleDarkMode}
            checked={darkMode}
            size={50}
          />
        </div>

        <Routes>
          <Route path='/' element={<Productlar />} />
          {/* <Route path='/users' element={<Productlar />} /> */}
          <Route path='/create' element={<Create />} />
          <Route path='/update/:id' element={<UpdateProd />} />
        </Routes>
      </div>
    </div >
  );
}

export default App