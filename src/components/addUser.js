import React, { useState } from "react";
import axios from 'axios';
function AddUser() {
    const [user, setUser] = useState({})

    const onFormChange = (e) => {
      const fieldName = e.target.name;
      const value = e.target.value;
      setUser({
        ...user,
        [fieldName]: value,
      });
    }
    const onSubmitHandler = (e)=>{
        e.preventDefault()
        const name=e.target.value
        const value = e.target.value
        console.log(name,value)
        onFormChange()
    }
console.log(user)
  return (
    <>
      <h2>Add user</h2>
      <form onSubmit={onSubmitHandler}>
      <input type="text" name="userId" placeholder="enter id" onChange={onFormChange} />
      <input type="text" name="userName" placeholder="Enter name" onChange={onFormChange} />
      <input type="gmail" name="userEmail" placeholder="Enter Email" onChange={onFormChange} />
      <label>
        Male
        <input type="radio" name="gender" value="Male" onChange={onFormChange} />
      </label>
      <label>
        Female
        <input type="radio" name="gender" value="Female" onChange={onFormChange} />
      </label>
      <label>
        Active
        <input type="radio" name="status" value="Active" onChange={onFormChange} />
      </label>
      <label>
        Inactive
        <input type="radio" name="status" value="Inactive" onChange={onFormChange} />
      </label>
      <button>submit</button>
      </form>
    </>
  );
}

export default AddUser;
