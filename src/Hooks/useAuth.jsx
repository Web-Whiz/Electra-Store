import { useContext } from "react";
import { AuthContext } from "../UserAuthentication/AuthProvider";

const useAuth = () => {
  const info = useContext(AuthContext);
  return info;
};
export default useAuth;
