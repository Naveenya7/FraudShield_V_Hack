import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './Imageinput.css'; // Import CSS file
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

const ImageAnalysisPage = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const handleAnalyzeClick = () => {
    // Implement your image analysis logic here
    console.log(image); // For demonstration, logs the selected image file
  };

  return (
    <>
    <div className="image-container">
      {/* <h1>Image Analysis Page</h1> */}
      <h1>Image Analysis</h1>
      <p className="file-accept-info">Accepted file types: images (.png, .jpg, .jpeg, .gif)</p>
      <p className="file-size-info">Maximum file size: 5MB</p>
      {image && (
        <div className="image-preview">
          <p>{image.name}</p>
          <button className="remove-image-button" onClick={handleRemoveImage}>X</button>
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="image-input" // Apply class name
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

export default ImageAnalysisPage;
