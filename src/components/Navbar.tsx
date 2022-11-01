import { AiOutlineLogout } from "react-icons/ai";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const auth = useAuth();

  return (
    <nav className="py-4 flex justify-between px-6 border border-b-[#e5e7f0]">
      <h3>{auth.user.user.email}</h3>
      <button
        className="flex items-center ml-auto text-[#252733] hover:underline-offset-1 hover:underline"
        onClick={auth.signOut}
      >
        <span className="mr-2">Sign Out</span>
        <AiOutlineLogout />
      </button>
    </nav>
  );
};

export default Navbar;
