// import React, { useContext } from 'react'
// import { Navigate, Outlet } from 'react-router-dom'
// import { AuthContext } from './context/AuthContext'

// const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
//     const {currentUSer} = useContext(AuthContext)
//   return currentUSer ? <Outlet/> : <Navigate to="/SignIn"/>
// }

// export default PrivateRoute