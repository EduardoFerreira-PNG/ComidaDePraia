import './App.sass'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Login_phone from './LoginComponents/Login_phone/Login_phone'
import Login_mail from './LoginComponents/Login_mail/Login_mail'
import Support from './Pages/Support/Support'
import Restaurant from './Pages/Restaurant/Restaurant'
import Market from './Pages/Market/Market'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Login_phone' element={<Login_phone />} />
          <Route path='/Login_mail' element={<Login_mail />} />
          <Route path='/Restaurant' element={<Restaurant />} />
          <Route path='/Market' element={<Market />} />
          <Route path='/Support' element={<Support />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
