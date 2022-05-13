import { Link } from "react-router-dom"
import { signInWithPopup, signOut } from "firebase/auth"
import { auth, googleProvider } from '../firebase'



const SignIn = () => {
  const signWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(res => {
        const user = res.user
      })
  } 

  
  const logOut = () => {
    signOut(auth).then(() => console.log("sign out is succesfull"))
  }
  return (
    <div>
      <Link to="/">to home</Link>
      <button onClick={signWithGoogle}>Autorization</button>
      <button onClick={logOut}>sign out</button>
    </div>
  )
}

export default SignIn