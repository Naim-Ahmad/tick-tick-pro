import { Box, Button, Card, CardContent, Container, Divider, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useCreateUser from "../../hooks/useCreateUser";
import SocialLogin from "../shared/SocialLogin";

export default function SignUp() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const { signUpWithEmail } = useContext(AuthContext)

  // console.log(errors)
  const navigate = useNavigate()

  const { data, isPending, status, isError, error, mutate } = useCreateUser()

  const handleRegister = (data) => {
    // console.log(data)

    signUpWithEmail(data?.userEmail, data?.password)
      .then(() => {
        mutate(data)
      })
      .catch(err => {
        console.log(err)
        toast.error(err.message)
      })
  }

  if (isError) {
    console.log(error)
    return toast.error(error.message)
  }

  console.log(data)

  if (status === 'success') {
    if (data?._id) {
      toast.success("User Registration Successful!")
      return <Navigate to={'/dashboard'} />
    }
  }


  return (
    <Container sx={{ display: "flex", justifyContent: "center", alignItems: 'center', minHeight: '80svh' }}>
      <Card sx={{ minWidth: 400, maxWidth: 450 }}>
        <CardContent>
          <Typography variant="h4" textAlign="center">
            <Box component="span" style={{ color: '#4772fa', fontWeight: 'bold' }}>Sign</Box> Up
          </Typography>

          <form onSubmit={handleSubmit(handleRegister)} style={{ marginTop: '16px' }}>

            {/* ========  name ============= */}
            <TextField
              error={errors.userName}
              type="text"
              helperText={errors.userName && errors.userName.message}
              {...register('userName', { required: "Name is required" })}
              label="Nick Name"
              variant="standard"
              fullWidth
            />
            {/* ========  email ============= */}
            <TextField
              error={errors.userEmail}
              style={{ marginTop: '18px' }}
              type="email"
              helperText={errors.userEmail && errors.userEmail.message}
              {...register('userEmail', { required: "Email is required" })}
              label="Email"
              variant="standard"
              fullWidth
            />

            {/* ========  password ============= */}
            <TextField
              error={errors.password}
              type="password"
              style={{ marginTop: '18px' }}
              helperText={errors.password && errors.password.message}
              {...register('password', { required: "Password is required", minLength: { value: 6, message: 'Minimum Six Character' } })}
              label="Password"
              variant="standard"
              fullWidth
            />

            <Button type="submit" style={{ marginTop: '16px' }} variant="contained" fullWidth>Register</Button>
          </form>

          <Divider style={{ margin: '18px 0' }}><Typography variant="overline">Or With</Typography></Divider>

          <SocialLogin />
        </CardContent>
      </Card>
    </Container>
  )
}