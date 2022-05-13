import { Routes, Route } from "react-router-dom";

import MainTodo from "./components/MainTodo/Main-todo";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  // const user = auth.currentUser.displayName

  return (

      <Routes>
        <Route path="/" element={<MainTodo />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>

  );
}

export default App;
