
import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import Loading from "../components/Loading"
import { AuthContext } from '../context/AuthProvider'

export default function PrivateRoute({ children }) {

  const { isLoading, user } = useContext(AuthContext)
  const { pathname } = useLocation()

  if (isLoading) return <Loading />

  if (user) return children;

  return <Navigate state={pathname} to="/signIn" />
}