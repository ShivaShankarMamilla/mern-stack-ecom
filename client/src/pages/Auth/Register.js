import React,{useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {toast} from "react-toastify"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import "../../styles/AuthStyles.css"
const Register = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [phone,setPhone] = useState("")
  const [address,setAddress] = useState("")
  const [answer,setAnswer] = useState("")
  const navigate = useNavigate()
  const handleSubmit = async(e) =>{
    e.preventDefault()
    try{
      const res = await axios.post(`/api/v1/auth/register`,{name,email,password,phone,address,answer})
      if(res.data.success){
        toast.success(res.data.message)
        navigate('/login')
      }else{
        toast.error(res.data.message)
      }

    }catch(error){
      console.log(error)
      toast.error("Something went wrong")
    }
  }
  return (
    <>
      <Header/>
      <div className="form-container" style={{height:"100vh"}}>
      <div>
        <div className="register">
          
          <form onSubmit={handleSubmit}>
          <h1 className='title'>REGISTER</h1>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">Name</label>
              <input type="text" className="form-control" id="exampleInputName" value={name} onChange={(e)=>setName(e.target.value)} required/>
              
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail" value={email} 
              onChange={(e)=>setEmail(e.target.value)} required/>
              
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
              <input type="text" className="form-control" id="exampleInputPhone"  value={phone}
              onChange={(e)=>setPhone(e.target.value)} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputAddress" className="form-label">Address</label>
              <input type="text" className="form-control" id="exampleInputAddress" value={address} onChange={(e)=>setAddress(e.target.value)} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputAnswer" className="form-label">Answer</label>
              <input type="text" className="form-control" id="exampleInputAnswer" value={answer} onChange={(e)=>setAnswer(e.target.value)} placeholder="What is your Favorite sport" required/>
            </div>


            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default Register