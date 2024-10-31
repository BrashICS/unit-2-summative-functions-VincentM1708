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

//RECTANGULAR PRISM
document.getElementById("rect_area_output").addEventListener("click", rect_prism_area);
document.getElementById("rect_surface_output").addEventListener("click", rect_surface_area);


//SPHERE
document.getElementById("sphere_volume_output").addEventListener("click", sphere_volume);
document.getElementById("sphere_area_output").addEventListener("click", sphere_area);


//SLOPE
document.getElementById("slope_output").addEventListener("click", slope_line);

//LENGTH OF LINE
document.getElementById("length_output").addEventListener("click", line_length);

//MIDPOINT
document.getElementById("midpoint_output").addEventListener("click", midpoint);


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
function leng(x1, y1, x2, y2) {
    return Math.sqrt((delta(x2, x1)**2 + delta(y2, y1)**2));
}

// HTML PORTION

// #6 


// #7
function rect_prism_area() {
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);
    let volume = round_user( width * height * length)
    document.getElementById("volume").textContent = `${volume}`
    return round_user(width* height *length);
}

//#8
function rect_surface_area() {
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);
    let surface = round_user(2*(width*length + height*length + height*width));
    document.getElementById("surface").textContent = `${surface}`
    return round_user(2*(width*length + height*length + height*width));
}

//#9
function sphere_volume() {
    let radius = Number(document.getElementById("radius").value);
    let svolume = round_user(4/3*(Math.PI*radius**3));
    document.getElementById("svolume").textContent = `${svolume}`
    return round_user(4/3*(Math.PI*radius**3));
}



//ALSO #9
function sphere_area() {
    let radius = Number(document.getElementById("radius").value);
    let sarea = round_user(4*Math.PI*radius**2);
    document.getElementById("sarea").textContent = `${sarea}`
    return round_user(4*Math.PI*radius**2);
}


//#10 Completed just boxes of x1, y1, x2, y2


//#11 Slope
function slope_line() {
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    let mslope = round_user(slope(x1, y1, x2, y2));
    document.getElementById("mslope").textContent = `${mslope}`
    return mslope;
}

//#11 Line Length
function line_length() {
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    let dl = round_user(leng(x1, y1, x2, y2));
    document.getElementById("dl").textContent = `${dl}`
    return dl;
}

function midpoint() {
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    let averagex = round_user(average(x1, x2));
    let averagey = round_user(average(y1, y2));
    document.getElementById("midpoint").textContent = `(${averagex}, ${averagey})`;
}