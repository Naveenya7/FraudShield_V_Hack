import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './Audio.css'; // Import CSS file

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

const AudioInput = () => {
  const [audioFile, setAudioFile] = useState(null);

  const handleAudioChange = (event) => {
    setAudioFile(event.target.files[0]);
  };

  const handleAnalyzeClick = () => {
    // Implement your audio analysis logic here
    console.log(audioFile); // For demonstration, logs the selected audio file
  };

  return (
    <div className="audio-container">
      <h1>Audio Analysis Page</h1>
      <input
        type="file"
        accept="audio/*"
        onChange={handleAudioChange}
        className="audio-input" // Apply class name
      />
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          onClick={handleAnalyzeClick}
          className="analyze-button" // Apply class name
          disabled={!audioFile} // Disable the button if no audio file is selected
          style={{ 
            marginTop: '20px', // Add margin at the top for spacing
            color: '#FFFFFF', // Set text color to white
          }}
        >
          Analyze
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default AudioInput;
