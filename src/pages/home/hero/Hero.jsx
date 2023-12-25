import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import heroImage from '../../../assets/header.png';

export default function Hero() {

  return (
    <Container maxWidth="xl">
      <Grid container spacing={4} minHeight={"80svh"} alignItems="center">
        <Grid item sm={12} md={6}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <div data-aos="fade-up">
              <Typography variant="h2" sx={{ fontSize: { xs: 40, sm: 60 } }} fontWeight={900}>
                Stay Organized
                Stay Creative
              </Typography>

              <Typography variant="subtitle1" fontSize={18} my="1.5rem">
                Join millions of people to capture ideas, organize life, and do something creative everyday.
              </Typography>

              <Link to="/dashboard">
                <Button variant="contained" size="large">
                  Let&apos;s Get Start
                </Button>
              </Link>
            </div>
          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <figure>
            <img width={"100%"} src={heroImage} alt="" />
          </figure>
        </Grid>
      </Grid>
    </Container>
  )
}