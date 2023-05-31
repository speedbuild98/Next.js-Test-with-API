import Link from "next/link";

async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function UserPage({ params }) {
  const user = await getUser(params.id);
  

  return (
    <div className="user-page">
      <h1>User Details</h1>
      <div className="user-card">
        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
        <h2>{user.first_name} {user.last_name}</h2>
        <p>{user.email}</p>
      </div>
      <Link className="back-button" href="/">
        Back
      </Link>
    </div>
  );
}

export default UserPage;
