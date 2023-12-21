import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { Button } from "@mui/material";
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

export default function SocialLogin() {

  const {loginWithGoogle, loginWithGithub}=  useContext(AuthContext)
  // console.log(loginWithGithub, loginWithGoogle)
  const navigate = useNavigate()

  const handleSocialLogin = (func)=>{
    func()
    .then(()=> {
      toast.success('Logged in!')
      navigate('/')
    })
    .catch((err)=>{
      toast.error(err.code)
    })
  }

  return (
    <div>
      <Button onClick={()=> handleSocialLogin(loginWithGoogle)} component="label" fullWidth variant="outlined" style={{color: 'black'}} startIcon={<GoogleIcon />}>
         Google
      </Button>

      <Button onClick={()=> handleSocialLogin(loginWithGithub)} component="label" style={{marginTop: "18px", color: 'black'}} fullWidth variant="outlined" startIcon={<GitHubIcon />}>
         Github
      </Button>
    </div>
  )
}