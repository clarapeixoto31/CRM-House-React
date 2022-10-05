import React from 'react'
import Header from '../parts/Header'
import Footer from '../parts/Footer'
import SideMenu from '../parts/SideMenu'
import MainFunctions from '../parts/MainFunctions'

export default function AdminPainel() {
  return (
    <div className="wrapper">
      <div className="header">
        <Header />
      </div>
      <div className="container-fluid overflow-hidden">
      <div className="row vh-90 overflow-auto">
      <SideMenu/> 
      <MainFunctions/>
        <Footer/>
      </div>
      </div>
    </div>
  )
}
