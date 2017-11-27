/*
* New p5.js project example that binds the sketch to a DIV and adjusts
* the canvas size to fit into it respecting the predefined aspect ratio
* if the ratio is defined
*
* Should the ratio NOT be defined the canvas will fit the whole parent DIV
*
* I'll be using this as my template for future new projects ...
*/

// Name of the DIV holding the sketch
let divName = "p5-sketch-holder";

/*
* RATIO between the width and height
* [WIDTH , HEIGHT] or 'null'
*
* If the RATIO is defined as 'null' it would always fill the whole DIV
*
* Examples:
* RATIO 16:9 is [16, 9]
* RATIO 1:1 (square) is [1, 1]
* RATIO 'null' - always fill the whole parent DIV
*/
let sketchRatio = [16, 9];
//let sketchRatio = null;

function setup() {
    // Create canvas
    let canvas = createCanvas();

    // Place the canvas into this DIV
    canvas.parent(divName);

    // Call the windowResized() function the first time to get the initial values for the canvas
    windowResized();
}

function draw() {
    background(220);
}

// Resized window. function that is ran every time a size of the windows changes
function windowResized() {

    // Read the DIV current (new) size and adjust them to fit proportionally
    let tempWidth = document.getElementById(divName).offsetWidth;
    let tempHeight = document.getElementById(divName).offsetHeight;

    // Check if the ratio is defined, if not just use the new DIV dimensions
    if (!(sketchRatio == null)) {

        // Find out which one is smaller - we have to make that one FIT
        // For this calculation we need to take the RATIO into consideration
        if (tempWidth * sketchRatio[1] > tempHeight * sketchRatio[0]) {

            // The WIDTH is bigger than 'allowed' and so we need to adjust that
            // To do this we take the HEIGHT value and use that to calculate new WIDTH value
            // We let the HEIGHT untouched
            tempWidth = tempHeight / sketchRatio[1] * sketchRatio[0];

        } else {

            // The HEIGHT is bigger than 'allowed' and so we need to adjust that
            // To do this we take the WIDTH value and use that to calculate new HEIGHT value
            // This also runs if the ratios are "same" (1:1)
            // We let the WIDTH untouched
            tempHeight = tempWidth / sketchRatio[0] * sketchRatio[1];
        }
    }

    // The calculation is done, the values are adjusted lets apply them
    resizeCanvas(tempWidth, tempHeight);
}


