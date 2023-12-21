import { Box, Checkbox, Divider, Grid, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import { useDrag } from "react-dnd";
import { dragTypes } from "../../config/dragTypes";

export default function Dashboard() {

  const [checked, setChecked] = useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [{isDragging}, drag] = useDrag(()=>({
    type: dragTypes.task,
    collect: (monitor)=> ({
      isDragging: !!monitor.isDragging()
    })
  }))

  console.log(isDragging, drag)

  return (
    <Box bgcolor="background.paper">
      <Typography variant="h3">
        All Todo
      </Typography>
      <Divider />

      <Grid container spacing={6} mt={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Box>
            <Typography variant="h4">
              To Do
            </Typography>
            <Divider />
            <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <ListItem
                ref={drag}
                style={isDragging && {border: '3px solid tomato'}}
                secondaryAction={
                  <Checkbox
                    edge="end"
                  />
                }
                disablePadding
              >
                <ListItemButton>

                  <ListItemText primary={`Line item `} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box>
            <Typography variant="h4">
              On Going
            </Typography>
            <Divider />
            <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <ListItem

                secondaryAction={
                  <Checkbox
                    edge="end"
                  />
                }
                disablePadding
              >
                <ListItemButton>

                  <ListItemText primary={`Line item `} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box>
            <Typography variant="h4">
              Completed
            </Typography>
            <Divider />
            <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <ListItem

                secondaryAction={
                  <Checkbox
                    edge="end"
                  />
                }
                disablePadding
              >
                <ListItemButton>

                  <ListItemText primary={`Line item `} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}