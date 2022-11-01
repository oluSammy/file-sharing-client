import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAuth = () => {
  const userContext = useContext(AuthContext);

  return userContext;
};

export default useAuth;
