import React,{useState,useEffect} from 'react'
import './EditDelete.css'
import Table from 'react-bootstrap/Table'
import {Link} from 'react-router-dom'
import axios from 'axios'

const EditDelete = () => {



  const [data,setdata]=useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/UserModel/update/:id")
    .then((res)=>{if(res.ok){
      return res.json();
    }})
    .then(jsonRes => {setdata(jsonRes)
    })
    .catch((err)=>console.log(err));

  },[data])





const DeleteData=(id)=> {

  axios.delete(`http://localhost:5000/UserModel/delete/${id}`)
  console.log(`Deleted item with id ${id}`)
  alert("Click Ok to delete item")
  
}

return(
  <>



  <div className="EditDeleteTable">
    <Link to="/"><button className="EditUserBtn">Create User</button></Link>
    <span className="EditDeleteTitle">Edit or Delete User</span>
      <Table width="100px" striped bordered hover>
  
      <thead>
     
     <tr>
      <th>id</th>
      <th>Username</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Address</th>
      <th>Edit</th>
      <th>Delete</th>
      </tr>
  </thead>
  
<tbody>

{data.map((item)=>

 <tr>
   
      <td>{item._id}</td>
      <td>{item.username}</td>
     <td>{item.email}</td>
     <td>{item.phone}</td>
     <td>{item.address}</td>
     <td><Link to={`/update/${item._id}`}><button  className="EditUser" >Edit</button></Link></td>
     <td><button onClick={()=>DeleteData(item._id)} className="DeleteBtn">Delete</button></td>
    
   </tr>
  )}
   
 </tbody>

  
</Table>
</div>
</>
)

}
export default EditDelete
