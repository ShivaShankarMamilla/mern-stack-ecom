import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

//we will protect this route..first in the backend server
const Dashboard = () => {
  return (
    <div>
        <Header/>
            <h1>Dashboard</h1>
        <Footer/>
    </div>
  )
}

export default Dashboard
