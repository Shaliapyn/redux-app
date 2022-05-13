import { Link } from "react-router-dom"

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const SignIn = () => {
  const {signWithGoogle} = useContext(AuthContext)
  return (
    <div>
      <Link to="/">to home</Link>
      <button onClick={signWithGoogle}>Autorization</button>
    </div>
  )
}

export default SignIn