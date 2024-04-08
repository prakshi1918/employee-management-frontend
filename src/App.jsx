import './App.css'
import HeaderComponent from './components/HeaderComponent'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import FooterComponent from './components/FooterComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import EmployeeComponent from './components/EmployeeComponent'

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <div className= "container">
     
      <Routes>
        <Route path="/" element={ <ListEmployeeComponent/>}></Route>
        <Route path="/employees" element={ <ListEmployeeComponent/>}></Route>
        <Route path="/add-employee" element={ <EmployeeComponent/>}></Route>
        <Route path="/edit-employee/:id" element={ <EmployeeComponent/>}></Route>
      </Routes>
     
      </div>
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
