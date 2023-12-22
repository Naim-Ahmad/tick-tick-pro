import { Box, Container, Grid, Typography } from "@mui/material";
import introImage from '../../assets/intro.png';

export default function Intro() {

  return (
    <Container maxWidth="xl">
      <Grid container spacing={4} minHeight={"80svh"} alignItems="center">
        <Grid item sm={12} md={6}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 40, sm: 60 } }} fontWeight={900}>
              Organize all aspects
              of your life
            </Typography>

            <Typography variant="subtitle1" fontSize={18} my="1.5rem">
              Get to-dos out of your mind, and get them done in less time.
            </Typography>

          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <figure>
            <img width={"100%"} src={introImage} alt="" />
          </figure>
        </Grid>
      </Grid>
    </Container>
  )
}