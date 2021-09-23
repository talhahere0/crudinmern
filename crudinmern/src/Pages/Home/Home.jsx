import React , {useState} from 'react'
import './Home.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
const Home = () => {
    const [username , setusername] = useState("")
    const [email , setemail] = useState("")
    const [phone , setphone] = useState("")
    const [address , setaddress] = useState("")

    const Createuser = (e) => {
        axios.post("http://localhost:5000/UserModel/insert",{username:username,email:email,phone:phone,address:address})
        
        e.preventDefault()
            setusername("")
            setemail("")
            setphone("")
            setaddress("")
           

       
    }
    return (
        <>

<div className="CreateUser">
    <span className="CreateUserTitle">Create User</span>
        <label>Username</label>
        <input value={username} onChange={(event)=>{
            setusername(event.target.value)
        }} type="text" className="CreateUserInput" />
        <label>Email</label>
        <input value={email} onChange={(event)=>{
            setemail(event.target.value)
        }}  type="text" className="CreateUserInput" />
        <label>Phone</label>
        <input value={phone} onChange={(event)=>{
            setphone(event.target.value)
        }}  type="text" className="CreateUserInput" />
        <label>Address</label>
        <input value={address} onChange={(event)=>{
            setaddress(event.target.value)
        }}  type="text" className="CreateUserInput" />
      <button onClick={Createuser} className="CreateUserBtn"><Link className="CreateUserLink" to="/EditDelete">Create</Link></button>
      </div>
        </>
    )
}

export default Home
