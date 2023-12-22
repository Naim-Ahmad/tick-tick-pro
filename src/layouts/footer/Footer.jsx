import { GitHub, LinkedIn } from "@mui/icons-material";
import { Typography } from "@mui/material";
import tickIcon from '../../assets/ticktickicon.png';

export default function Footer() {

  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <aside>
        <Typography
          variant="h6"
          component="div"
        >
          <img src={tickIcon} style={{ width: '10rem' }} />
        </Typography>

        <p>Tick Tick Pro Industries Ltd.<br />Providing reliable tech since 1992</p>
      </aside>
      <nav>
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4">
          <a target="__blank" href="https://github.com/Naim-Ahmad"><GitHub/></a>
          <a target="__blank" href="https://www.linkedin.com/in/naim-ahmad-7ab567256"><LinkedIn/></a>
          <a target="__blank" href="https://www.facebook.com/naim.ahmad.noyon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
        </div>
      </nav>
    </footer>
  )
}