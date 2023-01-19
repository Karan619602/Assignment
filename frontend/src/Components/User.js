import React,{Fragment,useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export const User=({history})=>{
 const [id,setid]=useState('')
   const [name,setname]= useState('');
   const [age,setage]= useState(0);
 const submithandler=(e)=>{

    e.preventDefault();
    axios.get(`http://localhost:4000/user/${id}`)
    .then(data=>{
        console.log(data.data.user);
    setname(data.data.user.name);
    setage(data.data.user.age);
    })
 }
    return(
        <Fragment>
       
                  
                      <div className="row wrapper"> 
		<div className="col-10 col-lg-5">
            <Link to="/">Home</Link>
        <form className="shadow-lg" onSubmit={submithandler}>
            <h1 className="mb-3 login">Get User</h1>
          
            <div className="form-group">
              <label htmlFor="age_field">id</label>
              <input
              type={String}
                id="id_field"
                className="form-control"
                value={id}
                onChange={(e)=>setid(e.target.value)}
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
      <h3>{name}</h3>
      <h3>{age===0?null:age}</h3>

		  </div>
    </div>
    </Fragment>  
            
        
    )
}
