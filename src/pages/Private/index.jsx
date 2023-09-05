import React from 'react'
import { logout } from '../../commonjs/auth'
import NavGauche from '../../commonjs/navGauche'
import NavBar from '../../commonjs/NavBar'
import Layout from '../../commonjs/Layout'
import { Routes , Route } from 'react-router'
import Home from './Home'
import Category from './Category'
import NoMatch from '../NoMatch'
import Question from './Question'


const Private = () => {
  return (
    <>
    {/* <!-- component --> */}
<NavGauche/>
<div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

<NavBar/>
    <div className="px-6 pt-6 2xl:container">
{/*  */}
<Routes>
  <Route path='/' element={<Layout/>}>
<Route index element={<Home/>}/>
<Route path='/Category' element={<Category/>}/>
<Route path='*' element={<NoMatch/>}/>
<Route path='/Question' element={<Question/>}/>
  </Route>

</Routes>
    </div>
</div>
    </>
  )
}

export default Private