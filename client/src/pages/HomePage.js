import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useAuth } from '../context/authContext'

const HomePage = () => {
  const [auth,setAuth] = useAuth()
  return (
    <div>
      <Header/>
      <div style={{height:"80vh"}}>
        <h1>Iam Home</h1>
        <pre>{JSON.stringify(auth)}</pre>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
