import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout'
import Home from '../pages/Home/Home'

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[{index:true , element:<Home/>}]
    }
]) 


export default routes