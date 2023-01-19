import React,{Fragment,useEffect,useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
export const Form=({history})=>{
  const navigate = useNavigate();
    const [name,setname]=useState('')
    const [age,setage]=useState(0)
    const [id,setid]=useState('')
   
    const submithandler=(e)=>{
        e.preventDefault();
        
        if(name && age){
       
            axios.post('http://localhost:4000/form',{name,age})
            .then(data=>{
                console.log(data);
                setid(data.data.user._id)
            })
            
        }
        
    }

    return(
        <Fragment>
        <Fragment>
                  
                      <div className="row wrapper"> 
		<div className="col-10 col-lg-5">
      <Link to="/">Home</Link>
        <form className="shadow-lg" onSubmit={submithandler}>
            <h1 className="mb-3 login">Create User</h1>
            <div className="form-group">
              <label htmlFor="name_field">Name</label>
              <input
                type="name"
                id="name_field"
                className="form-control"
                value={name}
                onChange={(e)=>setname(e.target.value)}
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="age_field">Age</label>
              <input
              type={Number}
                id="age_field"
                className="form-control"
                value={age}
                onChange={(e)=>setage(e.target.value)}
              />
            </div>

  
            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3 buttoncolor"
            >
              SUBMIT
            </button>

          </form>
		  </div>
      <h3>{id}</h3>
      <h3>{name}</h3>
      <h3>{age==0?null:age}</h3>
    </div>

    </Fragment>  
            
        </Fragment>
    )
}
