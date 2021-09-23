import React,{useState,useEffect} from 'react'
import './Update.css'

const Update = () => {
    
        const [data,setdata]=useState([])
        useEffect(()=>{
          fetch(`http://localhost:5000/UserModel/update/:id`)
          .then((res)=>{if(res.ok){
            console.log(data)
            return res.json();
          }})
          .then(jsonRes => {setdata(jsonRes)
          })
          .catch((err)=>console.log(err));
      
        },[data])
 

        
    return (
        <>
        {data.map((item=>(

        
           <div className="UpdateUser">
    <span className="UpdateUserTitle">Update User Details</span>
        <label>Username</label>
        <input value={item.username} type="text" className="UpdateUserInput" />
        <label>Email</label>
        <input value={item.email} type="text" className="UpdateUserInput" />
        <label>Phone</label>
        <input value={item.phone} type="text" className="UpdateUserInput" />
        <label >Address</label>
        <input value={item.address} type="text" className="UpdateUserInput" />
        <button className="UpdateUserBtn">Update</button>
      </div>
      
        )))}
        </>
    )
}

export default Update
