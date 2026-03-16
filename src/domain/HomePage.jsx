import { Typography } from "@mui/material";
import apartmentNewYork from "../assets/apartmentNewYork.jpg";

const baseURL = "https://albertprofedocs.s3.eu-central-1.amazonaws.com/apartment_predictor_images/";

const HomePage = () => {
  // Cambiamos el tipo a SyntheticEvent que React espera
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    // currentTarget es el <img> real
    e.currentTarget.src = apartmentNewYork;
  };

  return (
    <div className="homepage-container">
      <div className="homepage-header">
        <img 
          src={`${baseURL}apartmentNewYork.jpg`}
          alt="New York Apartment"
          onError={handleImageError}
          className="homepage-image"
        />
        <h1 className="homepage-title">
          Apartment Predictor
        </h1>
      </div>
      
      <div className="homepage-content">
        <Typography variant="h6" color="text.secondary" paragraph>
          Welcome to your apartment management system
        </Typography>
        <Typography variant="body1" paragraph>
          Navigate through the app using the sidebar menu to manage your apartment listings.
        </Typography>
      </div>
    </div>
  );
};

export default HomePage;