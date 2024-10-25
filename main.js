/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);

/*** Functions ***/

// Round to the nearest `decimals` number of decimals
function round(value, decimals) {
    return Math.round(value * 10**decimals) / 10**decimals;
}

// #4 Round to the user's number of decimals
function round_user(value) {
    // Get the number of decimals from the "rounding" box
    let d = Number(document.getElementById("rounding").value)
    return Math.round(value * 10**d) / 10**d

}

// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {

}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {

}


// #1 DELTA FUNCTION
function delta(a,b) {
    return a - b
}

// #2 SLOPE FUNCTION 
function slope(x1, y1, x2, y2) {
    return delta(y2,y1)/delta(x2,x1)
}

// #3 AVERAGE FUNCTION
function average(n1, n2) {
    return (n1 + n2)/2
}

// #5 LINE SEGMENT FUNCTION
function length(x1, y1, x2, y2) {
    return Math.sqrt((delta(x2, x1)**2 + delta(y2, y1)**2));
}

// HTML PORTION

// #6 


// #7
function rect_prism_area() {
    return round_user(width*height*length)

}