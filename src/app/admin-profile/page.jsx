import { AddUser } from "./components";

export default function AdminProfile() {
  return (
    <section>
      <h1 className="text-4xl mt-20 text-center">Admin Profile</h1>
      <div className="mt-20">
        <h2 className="text-center text-xl font-bold">Add User</h2>
        <AddUser />
      </div>
    </section>
  );
}
