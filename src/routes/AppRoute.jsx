import React from 'react'
import  {Routes, Route} from "react-router-dom"
import SignUp from '../Page/SignUp'
import LoginPage from '../Page/LoginPage'



const AppRoute =()=> {
  return (
   <Routes>
   <Route path='/signup' element={<SignUp/>}/>
   <Route path='/login' element={<LoginPage/>}/>
   </Routes>
  )
}

export default AppRoute;
