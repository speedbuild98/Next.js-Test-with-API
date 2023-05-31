'use client'

import {useRouter} from 'next/navigation';

async function fetchUsers() {
  try {
    const res = await fetch("https://reqres.in/api/users");
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return ['Error']; 
  }
}

async function Users() {

  const router = useRouter()

  try {
    const users = await fetchUsers();
    return (
      <ul className="users-list">
        {users &&
          users.map((user) => (
            <li key={user.id}
            onClick={()=>{
              router.push(`/users/${user.id}`);
            }}>
              <div>
                <h5>{user.id} {user.first_name} {user.last_name}</h5>
                <p>{user.email}</p>
              </div>
              <img src={user.avatar} alt={user.email} />
            </li>
          ))}
      </ul>
    );
  } catch (error) {
    console.error("Error rendering Users:", error);
    return null; 
  }
}

export default Users;
