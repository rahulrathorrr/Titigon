import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import HomePg from './Pages/HomePg'
import EcoPg from './Pages/EcoPg'
import Architecture from './Pages/Architecture'
import Scenario from './Pages/Scenario'
import RoadmaPage from './Pages/RoadmaPage'
import CompanyPage from './Pages/CompanyPage'
import PrivacyPage from './Pages/PrivacyPage'
import TermsPage from './Pages/TermsPage'




const App = () => {
  const router= createBrowserRouter([
    {
    path: '/',
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:'/',
        element: <HomePg/>
      },
      {
        path:'/platform-architecture',
        element: <Architecture/>
      },
      
      {
        path:'/product-ecosystem',
        element: <EcoPg/>
      },
      {
        path:'/application-scenarios',
        element: <Scenario/>
      },
      {
        path:'/roadmap',
        element: <RoadmaPage/>
      },
      {
        path:'/company',
        element: <CompanyPage/>
      },
      {
        path:'/privacy-policy',
        element: <PrivacyPage/>
      },
      {
        path:'/terms-and-conditions',
        element: <TermsPage/>
      },
      
      
    ]
    }

  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App