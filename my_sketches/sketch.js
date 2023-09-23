// Import the library
const canvasSketch = require('canvas-sketch');

// Specify some output parameters
const settings = {
  // The [ width, height ] of the artwork in pixels
  dimensions: [ 256, 256 ]
};

// Start the sketch
const sketch = () => {
  return (props) => {
    // Destructure what we need from props
    const { context, width, height } = props;

    // Fill the canvas with pink
    context.fillStyle = 'pink';
    context.fillRect(0, 0, width, height);

    // Now draw a white rectangle in the center
    context.lineWidth = 4;
    for (let i = 0; i < 30; i++) {
      context.strokeStyle = `rgba(233, 49, 122, ${i / 30}`;
      context.strokeRect(width / 4, height / 4, width / 2 - i * 3, height / 2 + i * 2);
    }
  };
};

// Start the sketch with parameters
canvasSketch(sketch, settings);