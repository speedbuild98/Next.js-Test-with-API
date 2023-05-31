import Users from "@/componentes/Users";

async function IndexPage() {
  return (
    <div className="index-page">
      <h1>Home Page</h1>
      <ul className="users-list">
        <Users />
      </ul>
    </div>
  );
}

export default IndexPage;
