// import Logo from "../../public/Logo"

const Navbar = () => {
  return (
    <div className="w-screen bg-green-100 flex flex-row justify-between">
      <div className="h-12 w-12 mx-5 bg-gray-200"></div>
      <div className="flex flex-row mx-5 my-auto">
        <p className="mx-2">Team</p>
        <p className="mx-2">Events</p>
        <p className="mx-2">Photos</p>
      </div>
    </div>
  );
};

export default Navbar;
