import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./navigation/SideBar";
import HomePage from "./pages/HomePage";
import ApartmentPage from "./pages/ApartmentPage";
import ApartmentFilterPage from "./pages/ApartmentFilterPage";
import SchoolMapPage from "./pages/SchoolMapPage";
import "./App.css";
import { AppProviders } from "./providers/AppProviders";

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const toggleDrawer = (open) => () => setDrawerOpen(open);
  
  return (
    <BrowserRouter>
      <AppProviders>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <IconButton onClick={toggleDrawer(true)} style={{ position: 'fixed', top: '16px', left: '16px', zIndex: 1000 }}>
            <MenuIcon />
          </IconButton>
          <SideBar open={drawerOpen} toggleDrawer={toggleDrawer} />
          
          <main style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, padding: '8px', marginLeft: '48px', width: '100%' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/apartments" element={<ApartmentPage />} />
              <Route path="/apartmentFilter" element={<ApartmentFilterPage />} />
              <Route path="/schoolMap" element={<SchoolMapPage />} />
            </Routes>
          </main>
        </div>
      </AppProviders>
    </BrowserRouter>
  );
}