import React from 'react'
import { useLoaderData } from 'react-router-dom';
import '../style/Users.css'
import { Link } from 'react-router-dom';

export default function Users() {
    
    const users=useLoaderData();
  return (
    <div className='conatiner'>
       <div className='users'>
       {users.map((user)=>{
        return(
            <Link key={user.id} >
                <div className='user'>
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                </div>
            </Link>
         
        )

       })}
       </div>
    </div>
  )
}
//creating a new loader func
// using it as async getting it from third party library api
//loader should display before fetching the data
export const userLoader=async()=>
{
    //getting a response with await keyword fetching the user data from the fake api
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    // return back the response in json format
    return res.json();
}