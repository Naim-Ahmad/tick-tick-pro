import { Card, CardContent, Container, Grid, Typography } from "@mui/material";

import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import SortIcon from '@mui/icons-material/Sort';

export default function Contact() {

  const featuresData = [
    {
      featureText: "Add tasks faster and easier",
      description: "This app is vary fast because here used react and tanstack query for data fetching.",
      icon: <ElectricBoltIcon fontSize="large" />
    },
    {
      featureText: "Multi-Priority",
      description: "Mark and sort tasks in four priority levels: High Priority, Medium Priority, Low Priority, No Priority.",
      icon: <>
        <LowPriorityIcon fontSize="large"></LowPriorityIcon>
      </>
    },
    {
      featureText: "Sorting",
      description: "TickTick supports six different sorting order. You'll always find a way that meets your needs.",
      icon: <SortIcon fontSize="large" />
    },
  ]

  return (
    <Container>
      <Typography variant="h3" textAlign="center" color="primary" fontWeight="bold" mb={4}>
        Features
      </Typography>
      <Grid container spacing={3}>
        {
          featuresData.map(data => (
            <Grid key={data?.featureText} item xs={12} sm={6} md={4}>
              <Card sx={{ textAlign: 'center' }}>
                <CardContent>
                  <Typography sx={{ textAlign: 'center' }}>
                    {data?.icon}
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
    </Container>
  )
}