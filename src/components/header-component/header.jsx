export default function HeaderComponent() {
  return (
    <div className="flex justify-around bg-red-300 p-5">
      <h1 className="text-2xl text-black">BookMyMeal</h1>
      <div className="flex gap-3">
        <a
          className="text-xl text-white border-2 p-2 border-black rounded-md"
          href="/employee-login/"
        >
          Employee Login
        </a>
        <a
          className="text-xl text-white border-2 p-2 border-black rounded-md"
          href="/registration/"
        >
          Registration
        </a>
      </div>
    </div>
  );
}
