import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function RecommendBy() {

  const [recommended, setRecommended] = useState([])

  useEffect(()=> {
    fetch('./recommendBy.json')
    .then(res=> res.json())
    .then(data=> setRecommended(data))
  }, [])

  // console.log(recommended)

  return (
    <div className="mt-10 mb-6">
      <Box>
        <Typography variant="h3" style={{ fontWeight: 'bold' }} className="text-center" marginBottom={3}>
          Who can benefit from this app?
        </Typography>


        <Grid container spacing={3}>
        {
          recommended.map(data=> (
            <Grid key={data.user_type} item xs={12} sm={6} md={4}>
              <Card sx={{ textAlign: 'center' }}>
                <CardContent>
                  <Typography  variant="h5" my={2}  sx={{ textAlign: 'center', fontWeight:'500' }}>
                    {data?.user_type}
                  </Typography>
                  <Typography variant="h5" my={2}>
                    {data?.featureText}
                  </Typography>

                  <Typography variant="body1" color="GrayText">
                    {data?.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
        </Grid>
      </Box>
    </div>
  )
}