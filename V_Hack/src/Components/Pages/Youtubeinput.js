import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './Youtubeinput.css'; // Import CSS file
import Usernavbar from '../Usernavbar';

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

const Youtubeinput = () => {
  const [url, setUrl] = useState('');

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleAnalyzeClick = () => {
    // Implement your YouTube URL analysis logic here
    console.log(url); // For demonstration, logs the entered YouTube URL
  };

  return (
    <>
    <div className="youtube-container">
      <h1>YouTube Analysis</h1>
      <input
        type="text"
        placeholder="Enter YouTube URL..."
        value={url}
        onChange={handleUrlChange}
        className="youtube-input" // Apply class name
        style={{ 
          width: '80%', // Set width to 80% of its parent container
          padding: '10px', // Add padding for better appearance
          fontSize: '16px', // Set font size
          borderRadius: '5px', // Add rounded corners
          border: '2px solid #03989E', // Add border with primary color
        }}
      />
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          onClick={handleAnalyzeClick}
          className="analyze-button" // Apply class name
          disabled={!url} // Disable the button if no URL is entered
          style={{ 
            marginTop: '10px', // Add margin at the top for spacing
            color: '#FFFFFF', // Set text color to white
          }}
        >
          Analyze
        </Button>
      </ThemeProvider>
    </div>
    </>
  );
};

export default Youtubeinput;
