import { Box, Button, Card, CardContent, Container, Divider, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import SocialLogin from "../shared/SocialLogin";

export default function SignIn() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const { signInWithEmail } = useContext(AuthContext)

  const navigate = useNavigate()

  // console.log(errors)

  const handleLogin = (data) => {
    console.log(data)
    signInWithEmail(data?.userEmail, data?.password)
      .then(() => {
        toast.success("User Logged Successful!")
        navigate('/dashboard')
      })
      .catch(err => {
        toast.error(err.code)
        console.log(err)
      })
  }

  return (
    <Container sx={{ display: "flex", justifyContent: "center", alignItems: 'center', minHeight: '80svh' }}>
      <Card sx={{ minWidth: 400, maxWidth: 450 }}>
        <CardContent>
          <Typography variant="h4" textAlign="center">
            <Box component="span" style={{ color: '#4772fa', fontWeight: 'bold' }}>Sign</Box> In
          </Typography>

          <form onSubmit={handleSubmit(handleLogin)} style={{ marginTop: '16px' }}>


            {/* ========  email ============= */}
            <TextField
              error={errors.userEmail}
              style={{ marginTop: '16px' }}
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
              style={{ marginTop: '16px' }}
              helperText={errors.password && errors.password.message}
              {...register('password', { required: "Password is required", minLength: { value: 6, message: 'Minimum Six Character' } })}

              type="password"
              label="Password"
              variant="standard"
              fullWidth
            />

            <Button type="submit" style={{ marginTop: '16px' }} variant="contained" fullWidth>Sign In</Button>
          </form>

          <Divider style={{ margin: '6px 0' }}><Typography variant="overline">Or With</Typography></Divider>

          <SocialLogin />
        </CardContent>
      </Card>
    </Container>
  )
}