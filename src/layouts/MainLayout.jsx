import { Box, Toolbar } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

export default function MainLayout() {

  return (
    <>
      <Toaster />
      <Navbar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </>
  )
}