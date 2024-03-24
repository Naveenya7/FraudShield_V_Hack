import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './Textinput.css'; // Import CSS file
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

const Textinput = () => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleAnalyzeClick = () => {
    // Implement your analysis logic here, for example, console logging the input text
    console.log(text);
  };

  return (
    <>
    <div className="textarea-container">
      <h1>Text Analysis</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
        rows={10}
        cols={50}
        className="textarea-input" // Apply class name
      />
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          onClick={handleAnalyzeClick}
          className="analyze-button" // Apply class name
        >
          Analyze
        </Button>
      </ThemeProvider>
    </div>
    </>
  );
};

export default Textinput;
