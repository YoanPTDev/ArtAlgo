document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.querySelector("canvas");
  var context = canvas.getContext("2d");

  var size = window.innerWidth;
  var dpr = window.devicePixelRatio;
  var step = 50;

  canvas.width = size * dpr;
  canvas.height = size * dpr;
  context.scale(dpr, dpr);

  context.lineCap = "round";
  context.lineWidth = 5;

  function draw(x, y, width, height) {
    var leftToRight = Math.random() >= 0.5;

    context.beginPath(); // Start a new path
    if (leftToRight) {
      context.moveTo(x, y);
      context.lineTo(x + width, y + height);
    } else {
      context.moveTo(x + width, y);
      context.lineTo(x, y + height);
    }

    context.stroke();
    // context.closePath(); // Close the path
}

function draw_rain(x, y, width, height, p) {
  var left = Math.random() <= 0.3;
  var right = Math.random() >= 0.58;

  var rand = Math.random();
  var percent = rand <= p / 9300;

  context.beginPath(); // Start a new path

  if (percent) {
    if (left) {
      context.moveTo(x, y);
      context.lineTo(x + width / rand, y + height / rand);
    } 
    else if (right) {
      context.moveTo(x + width / rand, y);
      context.lineTo(x, y + height / rand);
    }
  }

  context.stroke();
  // context.closePath(); // Close the path
}

function draw_lines(x, y, width, height, p) {
  var left = Math.random() <= 0.2;
  var right = Math.random() >= 0.8;

  var percent = Math.random() <= p / 4300;

  context.beginPath(); // Start a new path

  if (percent) {
    if (left) {
      context.moveTo(x, y);
      context.lineTo(x + width, y + height);
    } 
    else if (right) {
      context.moveTo(x + width, y);
      context.lineTo(x, y + height);
    }
  }

  context.stroke();
  // context.closePath(); // Close the path
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

clearCanvas(); // Call this before the loop

for (var x = 0; x < size; x += step) {
    for (var y = 0; y < size; y += step) {
        draw_rain(x, y, step, step, x);
    }
}
});
