import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useRef, useState } from 'react';


const App = () => {
  const [user, setUser]  = useState([])
  const nameref = useRef();
  const emailref = useRef();

  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[]);

      const Submithandler = (e) => {
      e.preventDefault();
      const name = nameref.current.value;
      const email = emailref.current.value;
      const newuser = {name:name, email:email};
      //send data to server
      fetch('http://localhost:5000/users',{
        method:'post',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(newuser)
      })
      .then(res => res.json())
      .then(data =>  {
        const addeduser = data;
        const userbox = [...user, addeduser]
        setUser(userbox)
      })
      }
  return (
    <div className="text-center">
      <h1>Back End Start</h1>
      <form onSubmit={Submithandler}>
        <input ref={nameref} type="text" name="" id="" />
        <input ref={emailref} type="email" name="" id="" placeholder="email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
     <br />
     <h1>User Found</h1>
     <ul>
       {
         user.map(u => <div  key={u.id}><li key={u.id} >{u.name}{u.email}</li></div>)
       }
     </ul>
    </div>
  );
};

export default App;