import { useContext } from "react";
import { StateContext } from "../Providers/Context";

const useStateContext = () => {
  const state = useContext(StateContext);
  return state;
};
export default useStateContext;
