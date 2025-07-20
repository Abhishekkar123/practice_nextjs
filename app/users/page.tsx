import React from 'react'

interface User{
    id:number;
    name:string;
}

const UserPages = async() => {

    const res= await fetch('https://jsonplaceholder.typicode.com/users',{cache:'no-store'});
   const user:User[]=await res.json();
  return (
    <div>
    <h1 className='m-4'> UserPage </h1>  
    <p>{new Date().toLocaleString()}</p>
      <ul>
        {
            user.map((user)=>{
                return(
                    <li key={user.id}>
                        {user.name}

                    </li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default UserPages;
