import { Routes, Route, useNavigate } from "react-router-dom";

import MainTodo from "./components/MainTodo/Main-todo";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { AuthContext } from "./context/AuthContext";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import { useState } from "react";

function App() {
  // const user = auth.currentUser.displayName
  const navigate = useNavigate()
  const [user, setUser] = useState()
  const signWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setUser(res.user.displayName)
        console.log(res.user.email)
        navigate("/")
      })
    }
  return (
    <AuthContext.Provider value={{signWithGoogle, user}}>
      <Routes>
        <Route path="/" element={<MainTodo />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
