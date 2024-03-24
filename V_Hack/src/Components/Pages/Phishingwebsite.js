import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Usernavbar from '../Usernavbar';
import Footer from '../Footer';
 // Import CSS file

const theme = createTheme({
  palette: {
    primary: {
      main: '#03989E',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
});

const WebsiteInput = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');

  const handleUrlChange = (event) => {
    setWebsiteUrl(event.target.value);
  };

  const handleAnalyzeClick = () => {
    // Implement your website URL analysis logic here
    console.log(websiteUrl); // For demonstration, logs the entered website URL
  };

  return (
    <><Usernavbar/>
    <div className="website-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Website Analysis</h1>
      <input
        type="text"
        placeholder="Enter website URL..."
        value={websiteUrl}
        onChange={handleUrlChange}
        className="website-input" // Apply class name
        style={{ 
          width: '80%', // Set width to 80% of its parent container
          padding: '10px', // Add padding for better appearance
          fontSize: '16px', // Set font size
          borderRadius: '5px', // Add rounded corners
          border: '2px solid #03989E', // Add border with primary color
        }}
      />
      <br></br>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          onClick={handleAnalyzeClick}
          className="analyze-button" // Apply class name
          disabled={!websiteUrl} // Disable the button if no website URL is entered
          style={{ 
            marginTop: '20px', // Add margin at the top for spacing
            color: '#FFFFFF', // Set text color to white
          }}
        >
          Analyze
        </Button>
      </ThemeProvider>
    </div>
    <Footer/>
    </>
  );
};

export default WebsiteInput;
