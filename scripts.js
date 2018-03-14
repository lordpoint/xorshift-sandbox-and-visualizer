const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const height = 500;
const width = 800;

canvas.height = height;
canvas.width = width;

let y = 0;
let state0 = 1; // SEED - change these to affect the apparent randomness of the outcome
let state1 = 2; // SEED - change these to affect the apparent randomness of the outcome

// Different initial seed values will dramatically affect the outcome. The default values, 1 & 2
// for state0 and state1 respectively, will produce a pattern in the visualizer.
// A pattern becomes visible when the algorithm starts to repeat itself. If you use 12 & 23, 
// in contrast, there is no perceptible pattern.

function draw() {
    for (let x = 0; x < width; x++) {
        if (xorshift() % 2 == 0) {
            context.fillRect(x, y, 1, 1);
        }
    }
    y++;
    if (y < height) {
        requestAnimationFrame(draw())
    }
}

function xorshift() {
    let s1 = state0; 
    let s0 = state1; 
    state0 = s0;  

    /* SHIFTS - Just as with the seed values, the shift values (23, 17, and 26 here) must be 
    carefully chosen to lengthen the algorithm's period (the number of iterations before you 
    encounter repetition). Try changing these to see how the outcome is affected. */

    s1 ^= s1 << 23;  // SHIFT
    s1 ^= s1 >> 17;  // SHIFT
    s1 ^= s0;
    s1 ^= s0 >> 26;  // SHIFT
    state1 = s1;

   return state0 + state1;
   
}



                                      


