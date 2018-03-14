# xorshift-sandbox

This is an implementation of the xorshift+ pseudo-random number generation (PRNG) algorithm in javascript. The intent of this project is to help you understand the effect of different seed and shift values on the outcome (i.e. the apparent randomness) of this PRNG; a version of which is used in all major browsers to perform javascript's Math.random() operation.

Open this project in your text editor / IDE of choice and try changing the state and shift variables (located in scripts.js) to see how they affect the apparent randomness of the outcome. Outcomes are visualized below.

This program runs the xorshift algorithm once for each pixel in the frame below. The pixel is colored black if xorshift returns an even number and white if it returns an odd number; outcomes which should be equally likely in a perfectly randomized scenario with no repetitions.
                    
'More random' results will have no perceptible pattern and will just look like tv snow or visual white noise. 'Less random' results will show clearly perceptible visual patterns. The default state values are 1 & 2, which will produce a pattern. Click the visualize button below to see what it looks like.
                